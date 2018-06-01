# yargs2

    add supportPassArgs for yargs, yargs the modern, pirate-themed, successor to optimist.


## Installation

```
npm i yargs2
```

## diff

1. add yargs.processArgs, see [Pull Requests# 1129](https://github.com/yargs/yargs/pull/1129)
2. add options.supportPassArgs for use `--` like `npm run` (enable by default)

## demo

> same usage and api with [yargs](https://github.com/yargs/yargs)

```ts
//import yargs = require('..');
import * as yargs from '..'

import { argv } from '..'

console.log(`processArgs`);
console.dir(yargs.processArgs);

console.log(`argv`);
console.dir(yargs.argv);

console.log('-------------------');

console.log(`\`supportPassArgs\` is enable by default\nif u don't want it\njust do \`yargs(yargs.processArgs)\``);

let y = yargs(yargs.processArgs);

console.log(`processArgs`);
console.dir(y.processArgs);

console.log(`argv`);
console.dir(y.argv);

console.log('-------------------');

console.log(`enable \`supportPassArgs\` again`);

let y2 = yargs(yargs.processArgs, undefined, {
	supportPassArgs: true,
});
console.log(`processArgs`);

console.dir(y2.processArgs);
console.log(`argv`);
console.dir(y2.argv);

```

```nodemon
node demo.js -a 77777 666 -- --p 1 a b c
```

### base

```ts
processArgs
[ '-a', '77777', '666', '--', '--p', '1', 'a', 'b', 'c' ]
argv
{ _: [ 666 ],
  a: 77777,
  '$0': 'demo.js',
  help: undefined,
  version: undefined,
  __: [ '--p', '1', 'a', 'b', 'c' ] }
```

### disable supportPassArgs

`supportPassArgs` is enable by default
if u don't want it
just do `yargs(yargs.processArgs)`

```ts
processArgs
[ '-a', '77777', '666', '--', '--p', '1', 'a', 'b', 'c' ]
argv
{ _: [ 666, '--p', '1', 'a', 'b', 'c' ],
  a: 77777,
  '$0': 'demo.js',
  help: undefined,
  version: undefined,
  __: [] }
```

### enable `supportPassArgs` again

```ts
processArgs
[ '-a', '77777', '666', '--', '--p', '1', 'a', 'b', 'c' ]
argv
{ _: [ 666 ],
  a: 77777,
  '$0': 'demo.js',
  help: undefined,
  version: undefined,
  __: [ '--p', '1', 'a', 'b', 'c' ] }
```
