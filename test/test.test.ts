/**
 * Created by user on 2018/7/12/012.
 */

/// <reference types="mocha" />
// @ts-ignore
/// <reference types="benchmark" />
/// <reference types="chai" />
/// <reference types="node" />

import { chai, relative, expect, path, assert, util, mochaAsync } from './_local-dev';

// @ts-ignore
import { ITest } from 'mocha';

import * as yargs from '..'
import yargs_old = require('yargs');

// @ts-ignore
describe(relative(__filename), () =>
{
	let currentTest: ITest;
	const testInput = '-a 77777 666 -- --p 1 a b c'.split(' ');

	beforeEach(function ()
	{
		currentTest = this.currentTest as ITest;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	// @ts-ignore
	describe(`suite`, () =>
	{
		// @ts-ignore
		it(`supportPassArgs: true`, function ()
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual = yargs(testInput.slice());
			actual.supportPassArgs = true;

			console.log(actual.processArgs);
			console.log(actual.argv);

			expect(actual.processArgs).to.be.deep.equal(testInput);
			expect(actual.argv._).to.be.deep.equal([ 666 ]);
			expect(actual.argv.__).to.be.deep.equal([ '--p', '1', 'a', 'b', 'c' ]);
		});

		it(`supportPassArgs: false`, function ()
		{
			//console.log('it:inner', currentTest.title);
			//console.log('it:inner', currentTest.fullTitle());

			let actual = yargs(testInput.slice());

			console.log(actual.processArgs);
			console.log(actual.argv);

			expect(actual.processArgs).to.be.deep.equal(testInput);
			expect(actual.argv.a).to.be.deep.equal(77777);
			expect(actual.argv._).to.be.deep.equal([ 666, '--p', '1', 'a', 'b', 'c' ]);
			expect(actual.argv.__).to.be.deep.equal([]);
		});
	});
});
