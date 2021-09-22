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
/**
 * Merges tiff images from the blob storage into a new one and upload it to the targetPath.
 */
export declare function mergeStorageImagePages(parameters: MergeStorageImagePages): Promise<MergeStorageImagePagesResult>;
