/**
 * Created by user on 2018/6/1/001.
 */

import _yargs = require('yargs/yargs');
import yargs = require('yargs');
import { Arguments as IArguments, Argv as IArgv } from 'yargs';

export type Argv = {

	(): IYargsReturnType;
	(args: string[], cwd?: string, options?: IOptions): IYargsReturnType;
	(args, cwd?, options?: IOptions): IYargsReturnType,

} & IYargsReturnType

export type Arguments = IArguments & {
	__?: string[],

	help?,
	version?,
}

export type IYargsReturnType = {
	processArgs?: string[],
	argv: Arguments,
} & IArgv & Arguments

export type IOptions = {
	supportPassArgs?: boolean,
}

let OLD_PARSE_ARGS;

export function _Argv(processArgs, cwd, options: IOptions = {}): IYargsReturnType
{
	options = options || {};

	let inputArgs = processArgs.slice();
	let passArgs: string[] = [];

	const argv = _yargs(inputArgs, cwd, require) as Argv;

	if (!OLD_PARSE_ARGS)
	{
		OLD_PARSE_ARGS = argv._parseArgs;
	}

	argv._parseArgs = function parseArgs(args, shortCircuit, _skipValidation, commandIndex)
	{
		let inputArgs = args.slice();
		let passArgs: string[] = [];

		if (options.supportPassArgs)
		{
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
	return argv
}

/*  Hack an instance of Argv with process.argv into Argv
    so people can do
    require('yargs')(['--beeble=1','-z','zizzle']).argv
    to parse a list of args and
    require('yargs').argv
    to get a parsed version of process.argv.
*/
export function singletonify(inst: IYargsReturnType)
{
	Object.keys(inst).forEach((key) =>
	{
		if (key === 'argv')
		{
			// @ts-ignore
			_Argv.__defineGetter__(key, inst.__lookupGetter__(key))
		}
		else
		{
			_Argv[key] = typeof inst[key] === 'function' ? inst[key].bind(inst) : inst[key]
		}
	})
}

export default _Argv as Argv
