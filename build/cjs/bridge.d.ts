export interface Configuration {
    writeKey: string;
    recordScreenViews: boolean;
    trackAppLifecycleEvents: boolean;
    trackAttributionData: boolean;
    debug: boolean;
    flushAt: number;
    android: {
        flushInterval?: number;
        collectDeviceId: boolean;
    };
    ios: {
        trackAdvertising: boolean;
        trackDeepLinks: boolean;
    };
}
export declare type JsonValue = boolean | number | string | null | JsonList | JsonMap;
export interface JsonMap {
    [key: string]: JsonValue;
    [index: number]: JsonValue;
}
export interface JsonList extends Array<JsonValue> {
}
export interface Bridge {
    setup(configuration: Configuration): Promise<void>;
    track(event: string, properties: JsonMap, context: JsonMap): Promise<void>;
    identify(user: string, traits: JsonMap, context: JsonMap): Promise<void>;
    screen(name: string, properties: JsonMap, context: JsonMap): Promise<void>;
    group(groupId: string, traits: JsonMap, context: JsonMap): Promise<void>;
    alias(alias: string, context: JsonMap): Promise<void>;
    reset(): Promise<void>;
    flush(): Promise<void>;
    enable(): Promise<void>;
    disable(): Promise<void>;
}
declare const bridge: Bridge;
export default bridge;
