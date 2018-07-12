"use strict";
/**
 * Created by user on 2018/6/1/001.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
const core_1 = require("./core");
// @ts-ignore
__export(require("yargs"));
__export(require("./core"));
core_1.default(process.argv.slice(2), undefined, {
    supportPassArgs: true,
});
// @ts-ignore
exports.default = core_1.default;
Object.assign(core_1.default, {
    default: core_1.default,
});
module.exports = core_1.default;
