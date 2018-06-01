/**
 * Created by user on 2018/6/1/001.
 */
import { Arguments as IArguments, Argv as IArgv } from 'yargs';
export declare type Argv = {
    (): IYargsReturnType;
    (args: string[], cwd?: string, options?: IOptions): IYargsReturnType;
    (args: any, cwd?: any, options?: IOptions): IYargsReturnType;
} & IYargsReturnType;
export declare type Arguments = IArguments & {
    __?: string[];
    help?: any;
    version?: any;
};
export declare type IYargsReturnType = {
    processArgs?: string[];
    argv: Arguments;
} & IArgv & Arguments;
export declare type IOptions = {
    supportPassArgs?: boolean;
};
export declare function _Argv(processArgs: any, cwd: any, options?: IOptions): IYargsReturnType;
export declare function singletonify(inst: IYargsReturnType): void;
declare const _default: Argv;
export default _default;
