'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Importance;

(function (Importance) {
  Importance[Importance["Normal"] = 0] = "Normal";
  Importance[Importance["High"] = 1] = "High";
  Importance[Importance["Low"] = -1] = "Low";
})(Importance || (Importance = {}));

var SortDirection;

(function (SortDirection) {
  SortDirection[SortDirection["Ascending"] = 1] = "Ascending";
  SortDirection[SortDirection["Descending"] = -1] = "Descending";
})(SortDirection || (SortDirection = {}));
/**
 * Calls a nimFlow's HUB registered function in a module.
 * @param parameters Object containing the moduleName, name of the function and calling parameters.
 * @return returns the value of the invoked function at nimFlow's hub, awaiting for the result in case of a promise.
 */


function call(parameters) {
  // @ts-ignore
  return callFx(parameters);
}

var moduleName = 'Collections'; // //#endregion

function callCollectionsFunction(functionName, parameters) {
  return call({
    moduleName: moduleName,
    name: functionName,
    parameters: parameters
  });
}
/**
 * Finds custom collection documents.
 */


function findById(parameters) {
  return callCollectionsFunction('FindById', parameters);
}
/**
 * Finds custom collection documents.
 */

function find(parameters) {
  return callCollectionsFunction('Find', parameters);
}
/**
 * Queries using MongoDB aggregation framework pipeline to execute on a custom collection.
 * @param parameters The query containing the aggregation pipeline.
 * @return The result of executing the quewry.
 */

function aggregate(parameters) {
  return callCollectionsFunction('Aggregate', parameters);
}
/**
 * Inserts a document in a specific custom collection.
 * @return The Id of the inserted document.
 */

function insertOne(parameters) {
  return callCollectionsFunction('InsertOne', parameters);
}
/**
 * Inserts an array of documents into a custom collection.
 */

function insertMany(parameters) {
  return callCollectionsFunction('InsertMany', parameters);
}
/**
 * Replaces a document by Id.
 * @param parameters Command containing the collection type name, Id and new replacement data.
 * @return Returns the matched and actually modified counts.
 */

function replace(parameters) {
  return callCollectionsFunction('ReplaceOne', parameters);
}
/**
 * Updates or inserts the first document matching a criteria with a set of MQL's update operators.
 * @param parameters Command containing the collection type name, filter and update operators.
 * @return Returns the matched and actually modified counts.
 */

function updateOne(parameters) {
  return callCollectionsFunction('UpdateOne', parameters);
}
/**
 * Updates or inserts the documents matching a criteria with a set of MQL's update operators.
 * @param parameters Command containing the collection type name, filter and update operators.
 * @return Returns the matched and actually modified counts.
 */

function updateMany(parameters) {
  return callCollectionsFunction('UpdateMany', parameters);
}
/**
 * Deletes a document by Id.
 * @param parameters Command containing the custom collection name and the Id of the document.
 * @return The deleted documents count.
 */

function deleteOne(parameters) {
  return callCollectionsFunction('DeleteOne', parameters);
}
/**
 * Deletes the documents matching a criteria.
 * @param parameters Command containing the collection type name and filter.
 * @return Returns the deleted documents count.
 */

function deleteMany(parameters) {
  return callCollectionsFunction('DeleteMany', parameters);
}

var collections = {
  __proto__: null,
  findById: findById,
  find: find,
  aggregate: aggregate,
  insertOne: insertOne,
  insertMany: insertMany,
  replace: replace,
  updateOne: updateOne,
  updateMany: updateMany,
  deleteOne: deleteOne,
  deleteMany: deleteMany
};

var moduleName$1 = 'Tasks'; // #endregion

function addResponse(parameters) {
  return call({
    moduleName: moduleName$1,
    name: 'AddTaskResponse',
    parameters: parameters
  });
}
/**
 * Update many tasks after filtering, sorting and limiting the maximum number of them, allowing to optionally return the updated tasks.
 * @param parameters The command containing the criteria and the update values.
 * @return The result of executing the command.
 */

function searchAndUpdate(parameters) {
  return call({
    moduleName: moduleName$1,
    name: 'SearchAndUpdateTasks',
    parameters: parameters
  });
}
/**
 * Queries using MongoDB aggregation framework pipeline to execute on the tasks collection.
 * @param parameters The query containing the aggregation pipeline.
 * @return The result of executing the quewry.
 */

function aggregate$1(parameters) {
  return call({
    moduleName: moduleName$1,
    name: 'AggregateTasks',
    parameters: parameters
  });
}

var tasks = {
  __proto__: null,
  addResponse: addResponse,
  searchAndUpdate: searchAndUpdate,
  aggregate: aggregate$1
};

var moduleName$2 = 'Events'; //#endregion

/**
 * Registers custom events occurred in a system.
 */

function registerCustomEvents(parameters) {
  return call({
    moduleName: moduleName$2,
    name: 'RegisterCustomEvents',
    parameters: parameters
  });
}
/*
 *Searches for system failures trying to dispatch actions from event listeners aka automations.
 */

function searchEventListenerFailures(parameters) {
  return call({
    moduleName: moduleName$2,
    name: 'SearchEventListenerFailures',
    parameters: parameters
  });
}
/**
 * Queries using MongoDB aggregation framework pipeline to execute on the events collection.
 */

function aggregate$2(parameters) {
  return call({
    moduleName: moduleName$2,
    name: 'AggregateEvents',
    parameters: parameters
  });
}

var events = {
  __proto__: null,
  registerCustomEvents: registerCustomEvents,
  searchEventListenerFailures: searchEventListenerFailures,
  aggregate: aggregate$2
};

var moduleName$3 = 'Contexts'; //#endregion

/**
 * Dispatches a context predefined action by context type name and id or reference with its corresponding payload.
 * @param parameters Command containing the required reference information and payload.
 * @return Command execution result.
 */

function dispatchAction(parameters) {
  return call({
    moduleName: moduleName$3,
    name: 'DispatchContextAction',
    parameters: parameters
  });
}
/**
 * Queries using MongoDB aggregation framework pipeline to execute on the contexts collection.
 * @param parameters The query containing the aggregation pipeline.
 * @return The result of executing the quewry.
 */

function aggregate$3(parameters) {
  return call({
    moduleName: moduleName$3,
    name: 'AggregateContexts',
    parameters: parameters
  });
}

var contexts = {
  __proto__: null,
  dispatchAction: dispatchAction,
  aggregate: aggregate$3
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Calls a nimFlow's HUB user defined function.
 * @param parameters Object containing the name of the UserDefined module's function and calling parameters.
 * @return returns the value of the invoked function at nimFlow's hub, awaiting for the result in case of a promise.
 */
function _call(parameters) {
  // @ts-ignore
  return callFx(_extends({}, {
    moduleName: 'UserDefined'
  }, parameters));
}
function fn(name) {
  return {
    call: function call(parameters) {
      return _call({
        name: name,
        parameters: parameters
      });
    }
  };
}

var userDefined = {
  __proto__: null,
  call: _call,
  fn: fn
};

var moduleName$4 = 'BlobStorage'; //#endregion

/**
 * Writes multiple file blobs to a single folder.
 */

function writeFiles(parameters) {
  return call({
    moduleName: moduleName$4,
    name: 'WriteFiles',
    parameters: parameters
  });
}
/**
 * Returns the files information contained in the Blob Storage at a given folder.
 */

function list(parameters) {
  return call({
    moduleName: moduleName$4,
    name: 'List',
    parameters: parameters
  });
}
/**
 * Reads a blob file content from a path a return the content as a Base64 encoded string.
 */

function getDataUrl(parameters) {
  return call({
    moduleName: moduleName$4,
    name: 'GetDataUrl',
    parameters: parameters
  });
}
/**
 * Deletes a file at a given path.
 */

function deleteFile(parameters) {
  return call({
    moduleName: moduleName$4,
    name: 'DeleteFile',
    parameters: parameters
  });
}

var blobStorage = {
  __proto__: null,
  writeFiles: writeFiles,
  list: list,
  getDataUrl: getDataUrl,
  deleteFile: deleteFile
};

var moduleName$5 = 'HttpCommands'; //#endregion

/**
 * Sends a HTTP request with a raw string as content with a parametrized method.
 */

function sendString(parameters) {
  return call({
    moduleName: moduleName$5,
    name: 'SendString',
    parameters: parameters
  });
}
/**
 * Sends a GET http request using JSON.
 */

function getFromJson(parameters) {
  return call({
    moduleName: moduleName$5,
    name: 'GetFromJson',
    parameters: parameters
  });
}
/**
 * Sends a POST http request using JSON.
 */

function postAsJson(parameters) {
  return call({
    moduleName: moduleName$5,
    name: 'PostAsJson',
    parameters: parameters
  });
}
/**
 * Sends a PUT http request using JSON.
 */

function putAsJson(parameters) {
  return call({
    moduleName: moduleName$5,
    name: 'PutAsJson',
    parameters: parameters
  });
}
/**
 * Sends a POST http request as multipart/form-data.
 */

function postMultipartForm(parameters) {
  return call({
    moduleName: moduleName$5,
    name: 'PostMultipartForm',
    parameters: parameters
  });
}

var http = {
  __proto__: null,
  sendString: sendString,
  getFromJson: getFromJson,
  postAsJson: postAsJson,
  putAsJson: putAsJson,
  postMultipartForm: postMultipartForm
};

var moduleName$6 = 'Images'; //#endregion

/**
 * Merges tiff images from the blob storage into a new one and upload it to the targetPath.
 */

function mergeStorageImagePages(parameters) {
  return call({
    moduleName: moduleName$6,
    name: 'MergeStorageImagePages',
    parameters: parameters
  });
}
/**
 * Get an image from the storage and return the frame count (pages).
 * Returns -1 when the image is not found.
 */

function getStorageImageFrameCount(parameters) {
  return call({
    moduleName: moduleName$6,
    name: 'GetStorageImageFrameCount',
    parameters: parameters
  });
}
/**
 * Converts a base64 or dataUrl of an image to a specified target format
 */

function convertImage(parameters) {
  return call({
    moduleName: moduleName$6,
    name: 'ConvertImage',
    parameters: parameters
  });
}

var images = {
  __proto__: null,
  mergeStorageImagePages: mergeStorageImagePages,
  getStorageImageFrameCount: getStorageImageFrameCount,
  convertImage: convertImage
};

exports.blobStorage = blobStorage;
exports.call = call;
exports.collections = collections;
exports.contexts = contexts;
exports.events = events;
exports.http = http;
exports.images = images;
exports.tasks = tasks;
exports.userDefined = userDefined;
//# sourceMappingURL=nimflow-common-fns.cjs.development.js.map
