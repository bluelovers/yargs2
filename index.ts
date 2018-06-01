/**
 * Created by user on 2018/6/1/001.
 */

import yargs = require('yargs');
import Argv from './core';
export * from './core';

Argv(process.argv.slice(2), undefined, {
	supportPassArgs: true,
});

// @ts-ignore
export = Argv;
