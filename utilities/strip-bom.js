"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Strip BOM from file data.
// https://stackoverflow.com/questions/24356713
function stripBom(data) {
    return data.replace(/^\uFEFF/, '');
}
exports.stripBom = stripBom;
//# sourceMappingURL=/home/travis/build/angular/angular-cli/utilities/strip-bom.js.map