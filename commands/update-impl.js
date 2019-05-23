"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const child_process_1 = require("child_process");
const path = require("path");
const semver = require("semver");
const schematic_command_1 = require("../models/schematic-command");
const find_up_1 = require("../utilities/find-up");
const package_manager_1 = require("../utilities/package-manager");
const package_metadata_1 = require("../utilities/package-metadata");
const package_tree_1 = require("../utilities/package-tree");
const npa = require('npm-package-arg');
const oldConfigFileNames = [
    '.angular-cli.json',
    'angular-cli.json',
];
class UpdateCommand extends schematic_command_1.SchematicCommand {
    constructor() {
        super(...arguments);
        this.allowMissingWorkspace = true;
    }
    async parseArguments(_schematicOptions, _schema) {
        return {};
    }
    // tslint:disable-next-line:no-big-function
    async run(options) {
        const packages = [];
        for (const request of options['--'] || []) {
            try {
                const packageIdentifier = npa(request);
                // only registry identifiers are supported
                if (!packageIdentifier.registry) {
                    this.logger.error(`Package '${request}' is not a registry package identifer.`);
                    return 1;
                }
                if (packages.some(v => v.name === packageIdentifier.name)) {
                    this.logger.error(`Duplicate package '${packageIdentifier.name}' specified.`);
                    return 1;
                }
                // If next option is used and no specifier supplied, use next tag
                if (options.next && !packageIdentifier.rawSpec) {
                    packageIdentifier.fetchSpec = 'next';
                }
                packages.push(packageIdentifier);
            }
            catch (e) {
                this.logger.error(e.message);
                return 1;
            }
        }
        if (options.all && packages.length > 0) {
            this.logger.error('Cannot specify packages when using the "all" option.');
            return 1;
        }
        else if (options.all && options.migrateOnly) {
            this.logger.error('Cannot use "all" option with "migrate-only" option.');
            return 1;
        }
        else if (!options.migrateOnly && (options.from || options.to)) {
            this.logger.error('Can only use "from" or "to" options with "migrate-only" option.');
            return 1;
        }
        // If not asking for status then check for a clean git repository.
        // This allows the user to easily reset any changes from the update.
        if ((packages.length !== 0 || options.all) && !this.checkCleanGit()) {
            this.logger.error('Repository is not clean.  Please commit or stash any changes before updating.');
            return 2;
        }
        const packageManager = package_manager_1.getPackageManager(this.workspace.root);
        this.logger.info(`Using package manager: '${packageManager}'`);
        // Special handling for Angular CLI 1.x migrations
        if (options.migrateOnly === undefined && options.from === undefined) {
            if (!options.all && packages.length === 1 && packages[0].name === '@angular/cli') {
                const oldConfigFilePath = find_up_1.findUp(oldConfigFileNames, process.cwd());
                if (oldConfigFilePath) {
                    options.migrateOnly = true;
                    options.from = '1.0.0';
                }
            }
        }
        this.logger.info('Collecting installed dependencies...');
        const packageTree = await package_tree_1.readPackageTree(this.workspace.root);
        const rootDependencies = package_tree_1.findNodeDependencies(packageTree);
        this.logger.info(`Found ${Object.keys(rootDependencies).length} dependencies.`);
        if (options.all || packages.length === 0) {
            // Either update all packages or show status
            return this.runSchematic({
                collectionName: '@schematics/update',
                schematicName: 'update',
                dryRun: !!options.dryRun,
                showNothingDone: false,
                additionalOptions: {
                    force: options.force || false,
                    next: options.next || false,
                    packageManager,
                    packages: options.all ? Object.keys(rootDependencies) : [],
                },
            });
        }
        if (options.migrateOnly) {
            if (!options.from) {
                this.logger.error('"from" option is required when using the "migrate-only" option.');
                return 1;
            }
            else if (packages.length !== 1) {
                this.logger.error('A single package must be specified when using the "migrate-only" option.');
                return 1;
            }
            if (options.next) {
                this.logger.warn('"next" option has no effect when using "migrate-only" option.');
            }
            const packageName = packages[0].name;
            let packageNode = rootDependencies[packageName];
            if (typeof packageNode === 'string') {
                this.logger.error('Package found in package.json but is not installed.');
                return 1;
            }
            else if (!packageNode) {
                // Allow running migrations on transitively installed dependencies
                // There can technically be nested multiple versions
                // TODO: If multiple, this should find all versions and ask which one to use
                const child = packageTree.children.find(c => c.name === packageName);
                if (child) {
                    // A link represents a symlinked package so use the actual in this case
                    packageNode = child.isLink ? child.target : child;
                }
                if (!packageNode) {
                    this.logger.error('Package is not installed.');
                    return 1;
                }
            }
            const updateMetadata = packageNode.package['ng-update'];
            let migrations = updateMetadata && updateMetadata.migrations;
            if (migrations === undefined) {
                this.logger.error('Package does not provide migrations.');
                return 1;
            }
            else if (typeof migrations !== 'string') {
                this.logger.error('Package contains a malformed migrations field.');
                return 1;
            }
            // if not non-relative, add package name
            if (migrations.startsWith('.') || migrations.startsWith('/')) {
                migrations = path.join(packageName, migrations);
            }
            return this.runSchematic({
                collectionName: '@schematics/update',
                schematicName: 'migrate',
                dryRun: !!options.dryRun,
                force: false,
                showNothingDone: false,
                additionalOptions: {
                    package: packageName,
                    collection: migrations,
                    from: options.from,
                    to: options.to || packageNode.package.version,
                },
            });
        }
        const requests = [];
        // Validate packages actually are part of the workspace
        for (const pkg of packages) {
            const node = rootDependencies[pkg.name];
            if (!node) {
                this.logger.error(`Package '${pkg.name}' is not a dependency.`);
                return 1;
            }
            // If a specific version is requested and matches the installed version, skip.
            if (pkg.type === 'version' &&
                typeof node === 'object' &&
                node.package.version === pkg.fetchSpec) {
                this.logger.info(`Package '${pkg.name}' is already at '${pkg.fetchSpec}'.`);
                continue;
            }
            requests.push(pkg);
        }
        if (requests.length === 0) {
            return 0;
        }
        this.logger.info('Fetching dependency metadata from registry...');
        for (const requestIdentifier of requests) {
            let metadata;
            try {
                // Metadata requests are internally cached; multiple requests for same name
                // does not result in additional network traffic
                metadata = await package_metadata_1.fetchPackageMetadata(requestIdentifier.name, this.logger);
            }
            catch (e) {
                this.logger.error(`Error fetching metadata for '${requestIdentifier.name}': ` + e.message);
                return 1;
            }
            // Try to find a package version based on the user requested package specifier
            // registry specifier types are either version, range, or tag
            let manifest;
            if (requestIdentifier.type === 'version') {
                manifest = metadata.versions.get(requestIdentifier.fetchSpec);
            }
            else if (requestIdentifier.type === 'range') {
                const maxVersion = semver.maxSatisfying(Array.from(metadata.versions.keys()), requestIdentifier.fetchSpec);
                if (maxVersion) {
                    manifest = metadata.versions.get(maxVersion);
                }
            }
            else if (requestIdentifier.type === 'tag') {
                manifest = metadata.tags[requestIdentifier.fetchSpec];
            }
            if (!manifest) {
                this.logger.error(`Package specified by '${requestIdentifier.raw}' does not exist within the registry.`);
                return 1;
            }
        }
        return this.runSchematic({
            collectionName: '@schematics/update',
            schematicName: 'update',
            dryRun: !!options.dryRun,
            showNothingDone: false,
            additionalOptions: {
                force: options.force || false,
                packageManager,
                packages: requests.map(p => p.toString()),
            },
        });
    }
    checkCleanGit() {
        try {
            const result = child_process_1.execSync('git status --porcelain', { encoding: 'utf8', stdio: 'pipe' });
            return result.trim().length === 0;
        }
        catch (_a) {
            return true;
        }
    }
}
exports.UpdateCommand = UpdateCommand;
