import { AggregateQuery, MetricState, TagState } from './common';
export interface SearchEventListenerFailures {
    eventListenerId?: string | undefined;
    onOrAfter?: string | undefined;
    limit: number;
}
export interface RegisterCustomEventsResult {
    registeredCount: number;
}
export interface RegisterCustomEvents {
    events: CustomEventData[];
}
export interface CustomEventData {
    timestamp?: string | undefined;
    eventName: string;
    reference: string;
    props?: {
        [key: string]: any;
    } | undefined;
    tags?: TagState[] | undefined;
    metrics?: MetricState[] | undefined;
    sentBy?: string | undefined;
    category?: string | undefined;
}
export interface RegisterCustomEventsResult {
    registeredCount: number;
}
export interface RegisterCustomEvents {
    events: CustomEventData[];
}
export interface AggregateEvents extends AggregateQuery {
}
/**
 * Registers custom events occurred in a system.
 */
export declare function registerCustomEvents(parameters: RegisterCustomEvents): Promise<RegisterCustomEventsResult>;
export declare function searchEventListenerFailures(parameters: SearchEventListenerFailures): Promise<RegisterCustomEventsResult>;
/**
 * Queries using MongoDB aggregation framework pipeline to execute on the events collection.
 */
export declare function aggregate(parameters: AggregateEvents): Promise<any>;
