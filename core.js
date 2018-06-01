"use strict";
/**
 * Created by user on 2018/6/1/001.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _yargs = require("yargs/yargs");
let OLD_PARSE_ARGS;
function _Argv(processArgs, cwd, options = {}) {
    options = options || {};
    let inputArgs = processArgs.slice();
    let passArgs = [];
    const argv = _yargs(inputArgs, cwd, require);
    if (!OLD_PARSE_ARGS) {
        OLD_PARSE_ARGS = argv._parseArgs;
    }
    argv._parseArgs = function parseArgs(args, shortCircuit, _skipValidation, commandIndex) {
        let inputArgs = args.slice();
        let passArgs = [];
        if (options.supportPassArgs) {
            let i = inputArgs.indexOf('--');
            passArgs = inputArgs.slice(i + 1);
            inputArgs = inputArgs.slice(0, i);
        }
        let ret = OLD_PARSE_ARGS(inputArgs, shortCircuit, _skipValidation, commandIndex);
        ret.__ = passArgs;
        return ret;
    };
    argv.processArgs = argv.processArgs || processArgs.slice();
    singletonify(argv);
    return argv;
}
exports._Argv = _Argv;
/*  Hack an instance of Argv with process.argv into Argv
    so people can do
    require('yargs')(['--beeble=1','-z','zizzle']).argv
    to parse a list of args and
    require('yargs').argv
    to get a parsed version of process.argv.
*/
function singletonify(inst) {
    Object.keys(inst).forEach((key) => {
        if (key === 'argv') {
            // @ts-ignore
            _Argv.__defineGetter__(key, inst.__lookupGetter__(key));
        }
        else {
            _Argv[key] = typeof inst[key] === 'function' ? inst[key].bind(inst) : inst[key];
        }
    });
}
exports.singletonify = singletonify;
exports.default = _Argv;
