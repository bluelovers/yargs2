/**
 * Created by user on 2018/6/1/001.
 */

/// <reference types="yargs" />

import * as yargs from 'yargs';
import _Argv, { IOptions } from './core';
// @ts-ignore
export * from 'yargs';
export * from './core';
import { Arguments, Argv } from 'yargs';

export { Arguments, Argv };
export { IOptions }

export interface IYargs2 extends Argv
{
	(): Argv;
	(args: string[], cwd?: string): Argv;
	(args: string[], cwd?: string, options?: IOptions): Argv;
	(args, cwd?, options?: IOptions): Argv,

	processArgs: string[],
}

_Argv(process.argv.slice(2), undefined, {
	supportPassArgs: true,
});

// @ts-ignore
export default _Argv as IYargs2

Object.assign(_Argv, {
	default: _Argv,
});

// @ts-ignore
export = _Argv as IYargs2;
