export interface MergeStorageImagePages {
    fileUrls: string[];
    pages: {
        fileIndex: number;
        filePageNumber: number;
    }[];
    targetPath: string;
}
export interface MergeStorageImagePagesResult {
    newImagePath: string;
}
export interface GetStorageImageFrameCount {
    path: string;
}
/**
 * Merges tiff images from the blob storage into a new one and upload it to the targetPath.
 */
export declare function mergeStorageImagePages(parameters: MergeStorageImagePages): Promise<MergeStorageImagePagesResult>;
/**
 * Get an image from the storage and return the frame count (pages).
 * Returns -1 when the image is not found.
 */
export declare function getStorageImageFrameCount(parameters: GetStorageImageFrameCount): Promise<number | undefined>;
