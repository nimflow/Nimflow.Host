export declare enum Importance {
    Normal = 0,
    High = 1,
    Low = -1
}
export interface SortDefinition {
    fieldName: string;
    direction: SortDirection;
}
export declare enum SortDirection {
    Ascending = 1,
    Descending = -1
}
export interface OperationResult {
    isAcknowledged: boolean;
}
export interface Documents {
}
export interface Stages {
}
export interface TagState {
    name?: string | undefined;
    value?: string | undefined;
}
export interface MetricState {
    name?: string | undefined;
    value?: number | undefined;
}
/** Represents a custom collection abstract request. Could be a query or a command for a specific collection. */
export interface CustomCollectionRequestOfIEnumerableOfObject {
    /** Gets or sets the name of the collection.*/
    collectionName: string;
}
/** Represents a custom collection abstract query. */
export interface CustomCollectionQueryOfIEnumerableOfObject extends CustomCollectionRequestOfIEnumerableOfObject {
}
/** Represents a MongoDB aggregation framework pipeline to execute on a custom collection. */
export interface Aggregate extends CustomCollectionQueryOfIEnumerableOfObject {
    stages?: Stages[] | undefined;
}
/** Represents a MongoDB aggregation framework pipeline. */
export interface AggregateQuery {
    /** Gets or sets the MongoDB stages of the aggregate's pipeline.
     */
    stages?: any[] | undefined;
}
export interface CallParameters {
    /**Name of the module.*/
    moduleName: string;
    /**Name of the function.*/
    name: string;
    /**Function parameters. */
    parameters: Record<string, any>;
}
/**
 * Calls a nimFlow's HUB registered function in a module.
 * @param parameters Object containing the moduleName, name of the function and calling parameters.
 * @return returns the value of the invoked function at nimFlow's hub, awaiting for the result in case of a promise.
 */
export declare function call<T>(parameters: CallParameters): Promise<T>;
