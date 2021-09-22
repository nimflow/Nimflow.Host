import { AggregateQuery, Importance, SortDefinition } from './common';
/** Represents a MongoDB aggregation framework pipeline to execute on the tasks collection. */
export interface AggregateTasks extends AggregateQuery {
}
export interface ContextTask {
    id: string;
    contextId: string;
    contextTypeName: string;
    contextReference?: string | undefined;
    typeName: string;
    title: string;
    data: {
        [key: string]: any;
    };
    labels?: string[] | undefined;
    dateCreated: string;
    dateUpdated: string;
    assignedTo?: string | undefined;
    status?: string | undefined;
    archived: boolean;
    dueDate?: string | undefined;
    importance: Importance;
    focused: boolean;
}
/** Represents a base class query containing multiple criteria to search context´s tasks. */
export interface SearchTasksBase {
    /** Gets or sets the context's id the task must belongs to when a value is present.
     */
    contextId?: string | undefined;
    /** Gets or sets the context type name the task must belongs to when a value is present.
     */
    contextTypeName?: string | undefined;
    /** Gets or sets the context reference the task must belongs to when a value is present.
     */
    contextReference?: string | undefined;
    /** Gets or sets the type name of the task must belongs to when a value is present.
     */
    typeName?: string | undefined;
    /** Gets or sets a value that should contain the title of the task.
     */
    title?: string | undefined;
    /** Gets or sets the status that must be equal to the task's value.
     */
    status?: string | undefined;
    /** Gets or sets the archived status optional value to match the criteria.
  When archived is false, the query will required the task is active.
           */
    archived?: boolean | undefined;
    /** Gets or sets the focused optional value to match the criteria.
     */
    focused?: boolean | undefined;
    /** Gets or sets the importance optional value to match the criteria.
     */
    importance?: Importance | undefined;
    /** Gets or sets the due date optional value to match the criteria.
  The task's dueDate must be equal or greater than the passed value.
           */
    dueDateOnOrAfter?: string | undefined;
    /** Gets or sets the due date optional value to match the criteria.
  The task's dueDate must be less than the passed value.
           */
    dueDateBefore?: string | undefined;
    /** Gets or sets the multiple sorting properties to order the resulting tasks.
     */
    sort?: SortDefinition[] | undefined;
    /** Gets or sets the skip value, representing how many matching tasks must be ignored (after sorting).
  For pagination purposes.
           */
    skip: number;
    /** Gets or sets the limit value, representing the maximum number of tasks must be returned, for pagination purposes.
     */
    limit: number;
    /** Gets or sets the possible labels value the task must includes to match the criteria.
     */
    labels?: string[] | undefined;
}
/** Represents a query containing multiple criteria to search context´s tasks. */
export interface SearchTasks extends SearchTasksBase {
    /** Gets or set the string a task is assigned to.
     */
    assignedTo?: string | undefined;
    /** Gets or sets possible values a task can be assigned to match the criteria.
     */
    assignedToIncludes?: string[] | undefined;
    /** Gets or sets a boolean indicated if unassigned tasks (when assignedTo value is null or blank) must be or not
  included in the result of the query.
           */
    unassigned?: boolean | undefined;
}
/** Represents a command to add a response to an active task. */
export interface AddTaskResponse {
    /** Gets or sets the ContextId the task should belongs to.
     */
    contextId: string;
    /** Gets or sets the context's type name the task should belongs to.
     */
    contextTypeName: string;
    /** Gets or sets the task's type name of the active task.
     */
    taskTypeName: string;
    /** Gets or sets the name of the response type, previously defined for its task type, for which you are trying to send
  a response.
           */
    responseTypeName: string;
    /** Gets or sets a tracking value informing the application or integration sending the response.
     */
    sentBy?: string | undefined;
    /** Gets or sets the response payload object.
  Must satisfy corresponding JsonSchema if defined.
           */
    payload?: {
        [key: string]: any;
    } | undefined;
}
/** Represents a result of executing a AddTaskResponse command. */
export interface AddTaskResponseResult {
    /** Gets or sets the id of the registered response.
     */
    responseId?: string | undefined;
}
/** Command to change basic properties of a Tasks matching the search criteria. */
export interface SearchAndUpdateTasks {
    /** Gets or sets the search criteria to be matched by tasks in order to be updated.
     */
    search: SearchTasks;
    /** Gets or sets the property names and values to be updated.
     */
    values?: {
        [key: string]: any;
    } | undefined;
    /** Gets or sets a boolean value indicating if the command must return or not the updated tasks.
     */
    returnTasks: boolean;
}
/** Represents the result of executing an UpdateTasks command. */
export interface SearchAndUpdateTasksResult {
    /** Gets or sets the updated tasks if requested by the command.
     */
    tasks?: ContextTask[] | undefined;
    /** Gets or sets the count of tasks matched in the update command criteria.
     */
    matchedCount: number;
    /** Gets or sets the count of tasks that were actually updated.
     */
    modifiedCount: number;
}
export declare function addResponse(parameters: AddTaskResponse): Promise<AddTaskResponseResult>;
/**
 * Update many tasks after filtering, sorting and limiting the maximum number of them, allowing to optionally return the updated tasks.
 * @param parameters The command containing the criteria and the update values.
 * @return The result of executing the command.
 */
export declare function searchAndUpdate(parameters: SearchAndUpdateTasks): Promise<SearchAndUpdateTasksResult>;
/**
 * Queries using MongoDB aggregation framework pipeline to execute on the tasks collection.
 * @param parameters The query containing the aggregation pipeline.
 * @return The result of executing the quewry.
 */
export declare function aggregate(parameters: AggregateTasks): Promise<any>;
