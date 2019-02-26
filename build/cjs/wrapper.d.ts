import { Bridge } from './bridge';
export interface NativeDelegate {
    ready: boolean;
}
export declare type ErrorHandler = (err: Error) => void;
export declare class NativeWrapper<T extends NativeDelegate> {
    private readonly delegate;
    private readonly handler;
    private readonly queue;
    constructor(delegate: T, handler: ErrorHandler, queue?: Array<() => void>);
    run<M extends keyof Bridge>(method: M, caller: (fn: Bridge[M]) => Promise<void>): Promise<void>;
    ready(): void;
}
