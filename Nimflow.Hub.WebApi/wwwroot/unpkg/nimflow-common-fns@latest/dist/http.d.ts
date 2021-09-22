export interface HttpRequest {
    uri: string;
    headers?: Record<string, string | string[]>;
}
export interface SendString extends HttpRequest {
    value: any;
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
}
export interface GetFromJson extends HttpRequest {
}
export interface PostAsJson extends HttpRequest {
    value: any;
}
export interface PutAsJson extends HttpRequest {
    value: any;
}
export interface PostMultipartForm extends HttpRequest {
    stringEntries: {
        name: string;
        value: string;
    }[] | undefined;
    base64FileEntries: {
        fileName: string;
        base64: string;
    }[] | undefined;
}
export interface SendHttpResponse {
    statusCode: number;
    success: boolean;
    reasonPhrase?: string;
    content?: string;
}
/**
 * Sends a HTTP request with a raw string as content with a parametrized method.
 */
export declare function sendString(parameters: SendString): Promise<any>;
/**
 * Sends a GET http request using JSON.
 */
export declare function getFromJson(parameters: GetFromJson): Promise<any>;
/**
 * Sends a POST http request using JSON.
 */
export declare function postAsJson(parameters: PostAsJson): Promise<any>;
/**
 * Sends a PUT http request using JSON.
 */
export declare function putAsJson(parameters: PutAsJson): Promise<any>;
/**
 * Sends a POST http request as multipart/form-data.
 */
export declare function postMultipartForm(parameters: PostMultipartForm): Promise<SendHttpResponse>;
