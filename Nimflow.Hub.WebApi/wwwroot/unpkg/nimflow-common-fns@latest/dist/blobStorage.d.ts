export interface FileContent {
    fileName: string;
    base64: string;
}
export interface WriteFiles {
    path: string;
    files: FileContent[];
}
export interface Blob {
    name?: string | undefined;
    size?: number | undefined;
}
export interface List {
    path: string;
    filePrefix?: string | undefined;
}
export interface DeleteBlob {
    path: string;
}
export interface FileContent {
    fileName: string;
    base64: string;
}
export interface GetDataUrl {
    path: string;
}
export interface DeleteFile {
    path: string;
}
/**
 * Writes multiple file blobs to a single folder.
 */
export declare function writeFiles(parameters: WriteFiles): Promise<any>;
/**
 * Returns the files information contained in the Blob Storage at a given folder.
 */
export declare function list(parameters: List): Promise<Blob[]>;
/**
 * Reads a blob file content from a path a return the content as a Base64 encoded string.
 */
export declare function getDataUrl(parameters: GetDataUrl): Promise<string>;
/**
 * Deletes a file at a given path.
 */
export declare function deleteFile(parameters: DeleteFile): Promise<string>;
