/**
 * Created by user on 2018/6/1/001.
 */

// demo.js -a 77777 -- --p 1 a b c

//import yargs = require('..');
import * as yargs from '..'

import { argv } from '..'

console.log(`processArgs`);

console.dir(yargs.processArgs);

console.log(`argv`);

console.dir(yargs.argv);

console.log('-------------------');

console.log(`\`supportPassArgs\` is enable by default\nif u don't want it\njust do \`yargs(yargs.processArgs)\``);

//console.dir(yargs.processArgs);

let y = yargs(yargs.processArgs);
console.log(`processArgs`);

console.dir(y.processArgs);
console.log(`argv`);
console.dir(y.argv);

console.log(`enable \`supportPassArgs\` again`);

let y2 = yargs(yargs.processArgs, undefined, {
	supportPassArgs: true,
});
console.log(`processArgs`);

console.dir(y2.processArgs);
console.log(`argv`);
console.dir(y2.argv);

