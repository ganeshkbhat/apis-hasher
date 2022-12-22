/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: index.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { createSHA, verifySHA, hashFile, dehashFile, verifyFileHash, _createSHAHash, _fileContentHash, _fileContentDeHash, _verifySHAHash, _verifyFileContentHash } = require("./src/hasher.js");

module.exports.createSHA = _createSHAHash;
module.exports.verifySHA = _verifySHAHash;
module.exports.hashFile = _fileContentHash;
module.exports.dehashFile = _fileContentDeHash;
module.exports.verifyFileHash = _verifyFileContentHash;

module.exports._createSHAHash = _createSHAHash;
module.exports._fileContentHash = _fileContentHash;
module.exports._fileContentDeHash = _fileContentDeHash;
module.exports._verifySHAHash = _verifySHAHash;
module.exports._verifyFileContentHash = _verifyFileContentHash;
module.exports.default = _createSHAHash;
