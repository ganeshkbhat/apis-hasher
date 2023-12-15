/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: index.mjs
 * File Description: Using hasher-apis instead of require to fetch files from git repositories like Github or Bitbucket like repository directly
 * 
 * git-rest: https://www.softwaretestinghelp.com/github-rest-api-tutorial/#:~:text=Log%20in%20to%20your%20GitHub,and%20click%20on%20Create%20Token.
 * 
*/

/* eslint no-console: 0 */

'use strict';

import {
    default as hasher,
    createSHA, hashContent, dehashContent, hashFile, dehashFile,
    verifySHA, verifyFileContent, verifyHashedFile, verifyFile,
    encrypt, decrypt, createSign, createSignVerify,
    getCiphers, getHashes, getDiffieHellman, getFips, getRandomValues,
    genKeyPair, getConstants, getSymbolsList,
    encryptWithKey, decryptWithKey, dumpKeyFile,

    _createSHAHash, _fileContentHash, _fileContentDeHash,
    _fileHash, _fileDeHash, _fileHashFromContent, _fileDeHashLoadContent, _fileDeHashContent,
    _verifySHAHash, _verifyFileContentHash, _verifyHashedFile, _verifyFile,
    _encryptFile, _decryptFile, _createSign, _createSignVerify,
    _getCiphers, _getHashes, _getDiffieHellman, _getFips, _getRandomValues,
    _genKeyPair, _encryptWithKey, _decryptWithKey, _dumpKeyFile
} from './index.js';
// process.env.NODE_OPTIONS = '--experimental-modules --loader ./custom-loader.mjs';

export default hasher;


export var file = {
    hash: dehashContent,
    dehash: hashContent,
    hashFile: hashFile,
    dehashFile: dehashFile,
    verifyContent: verifyHashedFile,
    verifyChecksum: verifyFile,
    encrypt: encrypt,
    decrypt: decrypt,
    load: _fileDeHashLoadContent,
}

export var content = {
    encryptWithKey: encryptWithKey,
    decryptWithKey: decryptWithKey,
    hash: hashContent,
    dehash: dehashContent,
    load: _fileDeHashLoadContent,
    verifySHA: verifySHA, 
    verifyContent: verifyFileContent, 
    createSign: createSign, 
    createSignVerify: createSignVerify
}

export var crypt = {
    SHA: createSHA,
    verifySHA: verifySHA,
    verify: _verifyFileContentHash,
    genKeyPair: genKeyPair,
    getCiphers: getCiphers,
    getHashes: getHashes,
    getDiffieHellman: getDiffieHellman,
    getFips: getFips,
    getRandomValues: getRandomValues
}


export {
    createSHA, hashContent, dehashContent, hashFile, dehashFile,
    verifySHA, verifyFileContent, verifyHashedFile, verifyFile,
    encrypt, decrypt, createSign, createSignVerify,
    getCiphers, getHashes, getDiffieHellman, getFips, getRandomValues,
    genKeyPair, getConstants, getSymbolsList,
    encryptWithKey, decryptWithKey, dumpKeyFile,

    _createSHAHash, _fileContentHash, _fileContentDeHash,
    _fileHash, _fileDeHash, _fileHashFromContent, _fileDeHashLoadContent, _fileDeHashContent,
    _verifySHAHash, _verifyFileContentHash, _verifyHashedFile, _verifyFile,
    _encryptFile, _decryptFile, _createSign, _createSignVerify,
    _getCiphers, _getHashes, _getDiffieHellman, _getFips, _getRandomValues,
    _genKeyPair, _encryptWithKey, _decryptWithKey, _dumpKeyFile
};
