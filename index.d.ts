/**
 * Created by user on 2018/6/1/001.
 */
import { IOptions } from './core';
export * from 'yargs';
export * from './core';
import { Arguments, Argv } from 'yargs';
export { Arguments, Argv };
export { IOptions };
export interface IYargs2 extends Argv {
    (): Argv;
    (args: string[], cwd?: string): Argv;
    (args: string[], cwd?: string, options?: IOptions): Argv;
    (args: any, cwd?: any, options?: IOptions): Argv;
    processArgs: string[];
}
declare const _default: IYargs2;
export default _default;
declare const _default_1: IYargs2;
export = _default_1;
