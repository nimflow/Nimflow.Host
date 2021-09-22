export interface CallParameters {
    /**Name of the function.*/
    name: string;
    /**Function parameters. */
    parameters: Record<string, any>;
}
/**
 * Calls a nimFlow's HUB user defined function.
 * @param parameters Object containing the name of the UserDefined module's function and calling parameters.
 * @return returns the value of the invoked function at nimFlow's hub, awaiting for the result in case of a promise.
 */
export declare function call<T>(parameters: CallParameters): Promise<T>;
export declare function fn<T>(name: string): {
    call: (parameters: Record<string, any>) => Promise<T>;
};
