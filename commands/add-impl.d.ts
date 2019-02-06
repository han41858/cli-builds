import { Arguments } from '../models/interface';
import { SchematicCommand } from '../models/schematic-command';
import { Schema as AddCommandSchema } from './add';
export declare class AddCommand extends SchematicCommand<AddCommandSchema> {
    readonly allowPrivateSchematics = true;
    readonly allowAdditionalArgs = true;
    readonly packageManager: string;
    run(options: AddCommandSchema & Arguments): Promise<number | void>;
    private isPackageInstalled;
    private executeSchematic;
    private findProjectVersion;
    private hasMismatchedPeer;
}
