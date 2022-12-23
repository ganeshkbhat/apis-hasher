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

const { createSHA, verifySHA, hashContent, dehashContent, verifyHashedFile, verifyFile, hashFile, dehashFile, encrypt, decrypt, _createSHAHash, _fileContentHash, _fileContentDeHash, _verifySHAHash, _verifyFileContentHash } = require("./src/hasher.js");

module.exports.createSHA = createSHA;
module.exports.hashContent = hashContent;
module.exports.dehashContent = dehashContent;
module.exports.verifySHA = verifySHA;
module.exports.hashFile = hashFile;
module.exports.dehashFile = dehashFile;
module.exports.verifyHashedFile = verifyHashedFile;
module.exports.verifyFile = verifyFile;

module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;

module.exports._createSHAHash = _createSHAHash;
module.exports._fileContentHash = _fileContentHash;
module.exports._fileContentDeHash = _fileContentDeHash;
module.exports._verifySHAHash = _verifySHAHash;
module.exports._verifyFileContentHash = _verifyFileContentHash;
module.exports.default = _createSHAHash;
