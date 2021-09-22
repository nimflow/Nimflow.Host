import { Documents, OperationResult, Stages } from './common';
/** Represents the result of inserting a document in a custom collection. */
export interface InsertResult extends OperationResult {
    /** Gets or sets the id of the document inserted.
     */
    id: string;
}
/** Represents a custom collection abstract request. Could be a query or a command for a specific collection. */
export interface CustomCollectionRequestOfInsertResult {
    /** Gets or sets a the collection´s name.
     */
    collectionName: string;
}
/** Represents a custom collection abstract command. */
export interface CustomCollectionCommandOfInsertResult extends CustomCollectionRequestOfInsertResult {
}
/** Represents a command to insert one document in a custom collection. */
export interface InsertOne extends CustomCollectionCommandOfInsertResult {
    /** Gets or sets the document to be inserted.*/
    document?: {
        [key: string]: any;
    } | undefined;
}
/** Represents the result of inserting many documents in a custom collection. */
export interface InsertManyResult extends OperationResult {
}
/** Represents a custom collection abstract request. Could be a query or a command for a specific collection. */
export interface CustomCollectionRequestOfInsertManyResult {
    /** Gets or sets the name of the collection.*/
    collectionName: string;
}
/** Represents a custom collection abstract command. */
export interface CustomCollectionCommandOfInsertManyResult extends CustomCollectionRequestOfInsertManyResult {
}
/** Represents a command to update many documents in a batch in a custom collection. */
export interface InsertMany extends CustomCollectionCommandOfInsertManyResult {
    /** Gets or sets the documents to be inserted.
     */
    documents?: Documents[] | undefined;
}
export interface ReplaceOneResult extends OperationResult {
    matchedCount: number;
    modifiedCount: number;
}
/** Represents a custom collection abstract request. Could be a query or a command for a specific collection. */
export interface CustomCollectionRequestOfReplaceOneResult {
    /** Gets or sets the name of the collection.*/
    collectionName: string;
}
/** Represents a command to replace a document by a given id, overriding the full document's data. */
export interface ReplaceOne extends CustomCollectionRequestOfReplaceOneResult {
    /** Gets or sets the custom collection unique ID.
     */
    id: string;
    /** Gets or sets the new document's data.
     */
    replacement: {
        [key: string]: any;
    };
}
/** Represents the result of update one or more documents in a custom collection. */
export interface UpdateResult extends OperationResult {
    /** Count of existing document that matched the filter criteria.
     */
    matchedCount: number;
    /** Count of actual documents that were modified.
     */
    modifiedCount: number;
}
/** Represents a custom collection abstract request. Could be a query or a command for a specific collection. */
export interface CustomCollectionRequestOfUpdateResult {
    /** Gets or sets the name of the collection.*/
    collectionName: string;
}
/** Represents a custom collection abstract command. */
export interface CustomCollectionCommandOfUpdateResult extends CustomCollectionRequestOfUpdateResult {
}
/** Represents an abstract command to update documents in a custom collection. */
export interface UpdateCommandOfUpdateResult extends CustomCollectionCommandOfUpdateResult {
    /** Gets or sets the filter criteria the documents must match to be updated.
     */
    filter: {
        [key: string]: any;
    };
}
/** Represents a command to update the first document matching the filter criteria. */
export interface UpdateOne extends UpdateCommandOfUpdateResult {
    /** Gets or sets the MQL's update operators.
     */
    update: {
        [key: string]: any;
    };
    /** Gets or sets a boolean value indicating if documents must be inserted in case of not being into the custom collection.
     */
    isUpsert: boolean;
}
/** Represents a command to update many documents in a custom collection using MQL's update operators. */
export interface UpdateMany extends UpdateCommandOfUpdateResult {
    /** Gets or sets the update operators array.
     */
    update: any[];
}
/** Represents the result of deleting one or more documents in a custom collection. */
export interface DeleteResult extends OperationResult {
    deletedCount: number;
}
/** Represents a custom collection abstract request. Could be a query or a command for a specific collection. */
export interface CustomCollectionRequestOfDeleteResult {
    /** Gets or sets the name of the collection.*/
    collectionName: string;
}
/** Represents a custom collection abstract command. */
export interface CustomCollectionCommandOfDeleteResult extends CustomCollectionRequestOfDeleteResult {
}
/** Represents a command to delete a single document by Id in a custom collection. */
export interface DeleteOne extends CustomCollectionCommandOfDeleteResult {
    /** Gets or sets the document's Id.
     */
    id: string;
}
/** Represents a command to delete many documents matching a criteria in a custom collection. */
export interface DeleteMany extends CustomCollectionCommandOfDeleteResult {
    /** Gets or sets the filter MQL's operator.
     */
    filter?: {
        [key: string]: any;
    } | undefined;
}
/** Represents a custom collection abstract request. Could be a query or a command for a specific collection. */
export interface CustomCollectionRequestOfObject {
    /** Gets or sets the name of the collection.*/
    collectionName: string;
}
/** Represents a custom collection abstract query. */
export interface CustomCollectionQueryOfObject extends CustomCollectionRequestOfObject {
}
/** Represents a query to find a single document by Id in a custom collection. */
export interface FindById extends CustomCollectionQueryOfObject {
    /** Gets or sets the Id.
     */
    id: string;
}
/** Represents a custom collection abstract request. Could be a query or a command for a specific collection. */
export interface CustomCollectionRequestOfIEnumerableOfObject {
    /** Gets or sets the name of the collection.*/
    collectionName: string;
}
/** Represents a custom collection abstract query. */
export interface CustomCollectionQueryOfIEnumerableOfObject extends CustomCollectionRequestOfIEnumerableOfObject {
}
/** Represents a query to be executed on a custom collection. */
export interface Find extends CustomCollectionQueryOfIEnumerableOfObject {
    /** Gets or set the MQL filter operators.
     */
    filter?: {
        [key: string]: any;
    } | undefined;
    /** Gets or set the MQL sort operators.
     */
    sort?: {
        [key: string]: any;
    } | undefined;
    /** Gets or sets the skip value, representing how many matching tasks must be ignored (after sorting).
  For pagination purposes.
             */
    skip?: number | undefined;
    /** Gets or sets the limit value, representing the maximum number of tasks must be returned, for pagination purposes.
     */
    limit?: number | undefined;
}
/** Represents a MongoDB aggregation framework pipeline to execute on a custom collection. */
export interface Aggregate extends CustomCollectionQueryOfIEnumerableOfObject {
    stages?: Stages[] | undefined;
}
/** Represents a MongoDB aggregation framework pipeline to execute on a custom collection. */
export interface Aggregate extends CustomCollectionQueryOfIEnumerableOfObject {
    stages?: Stages[] | undefined;
}
/**
 * Finds custom collection documents.
 */
export declare function findById(parameters: FindById): Promise<any>;
/**
 * Finds custom collection documents.
 */
export declare function find(parameters: Find): Promise<any[]>;
/**
 * Queries using MongoDB aggregation framework pipeline to execute on a custom collection.
 * @param parameters The query containing the aggregation pipeline.
 * @return The result of executing the quewry.
 */
export declare function aggregate(parameters: Aggregate): Promise<any[]>;
/**
 * Inserts a document in a specific custom collection.
 * @return The Id of the inserted document.
 */
export declare function insertOne(parameters: InsertOne): Promise<InsertResult>;
/**
 * Inserts an array of documents into a custom collection.
 */
export declare function insertMany(parameters: InsertMany): Promise<InsertManyResult>;
/**
 * Replaces a document by Id.
 * @param parameters Command containing the collection type name, Id and new replacement data.
 * @return Returns the matched and actually modified counts.
 */
export declare function replace(parameters: ReplaceOne): Promise<ReplaceOneResult>;
/**
 * Updates or inserts the first document matching a criteria with a set of MQL's update operators.
 * @param parameters Command containing the collection type name, filter and update operators.
 * @return Returns the matched and actually modified counts.
 */
export declare function updateOne(parameters: UpdateOne): Promise<UpdateResult>;
/**
 * Updates or inserts the documents matching a criteria with a set of MQL's update operators.
 * @param parameters Command containing the collection type name, filter and update operators.
 * @return Returns the matched and actually modified counts.
 */
export declare function updateMany(parameters: UpdateMany): Promise<UpdateResult>;
/**
 * Deletes a document by Id.
 * @param parameters Command containing the custom collection name and the Id of the document.
 * @return The deleted documents count.
 */
export declare function deleteOne(parameters: DeleteOne): Promise<DeleteResult>;
/**
 * Deletes the documents matching a criteria.
 * @param parameters Command containing the collection type name and filter.
 * @return Returns the deleted documents count.
 */
export declare function deleteMany(parameters: DeleteMany): Promise<DeleteResult>;
