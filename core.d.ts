/**
 * Created by user on 2018/6/1/001.
 */
import { Argv } from 'yargs';
declare module 'yargs' {
    interface Arguments {
        __?: string[];
        help?: any;
        version?: any;
    }
    interface Argv {
        (): Arguments;
        (args: string[], cwd?: string): Arguments;
        (args: string[], cwd?: string, options?: IOptions): Arguments;
        (args: any, cwd?: any, options?: IOptions): Arguments;
        processArgs: string[];
        supportPassArgs: boolean;
    }
}
export { Arguments, Argv } from 'yargs';
export interface IOptions {
    supportPassArgs?: boolean;
}
export declare function _Argv(processArgs: any, cwd?: any, options?: IOptions): Argv;
export declare function singletonify(inst: Argv): void;
export default _Argv;
