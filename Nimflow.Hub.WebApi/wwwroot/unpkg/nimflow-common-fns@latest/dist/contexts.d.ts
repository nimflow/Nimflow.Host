import { AggregateQuery } from './common';
/** Represents a command to send an action in an existing context or to create it if it does not exist and the action is marked as initial. ContextId or reference must be defined. */
export interface DispatchContextAction {
    /** Gets or set the context type name.
     */
    contextTypeName: string;
    /** Gets or sets the context's ID. When use this property, the context must be already exists.
     */
    contextId?: string | undefined;
    /** Gets or sets the reference of the context.
  The reference is a unique identifier per context type, known to external systems with business semantics.
  If a reference does not exists for the given context type and the action is initial, a new context will be created.
             */
    reference?: string | undefined;
    /** Get or sets the predefined action name to dispatch.
     */
    action: string;
    /** Gets or sets the payload object for the action.
  Must satisfy corresponding JsonSchema if defined.
             */
    payload?: {
        [key: string]: any;
    } | undefined;
}
export interface DispatchContextActionResult {
    /** Gets or sets the context id of the contexts the action was dispatched on.
     */
    contextId: string;
    /** Gets or sets a value that indicates whether the context was created as a result of the dispatched action.
     */
    isNew: boolean;
}
/** Represents a MongoDB aggregation framework pipeline to execute on the contexts collection. */
export interface AggregateContexts extends AggregateQuery {
    /** Gets or set an optional context type name to use as a filter by equal.
     */
    contextTypeName?: string | undefined;
}
/**
 * Dispatches a context predefined action by context type name and id or reference with its corresponding payload.
 * @param parameters Command containing the required reference information and payload.
 * @return Command execution result.
 */
export declare function dispatchAction(parameters: DispatchContextAction): Promise<DispatchContextActionResult>;
/**
 * Queries using MongoDB aggregation framework pipeline to execute on the contexts collection.
 * @param parameters The query containing the aggregation pipeline.
 * @return The result of executing the quewry.
 */
export declare function aggregate(parameters: AggregateContexts): Promise<any>;
