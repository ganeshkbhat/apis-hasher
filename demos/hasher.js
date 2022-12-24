

let { 
    createSHA, hashContent, dehashContent, hashFile, dehashFile,
    verifySHA, verifyFileContent, verifyHashedFile, verifyFile,
    encrypt, decrypt, createSign, createSignVerify, getCiphers, getHashes,
    
    _createSHAHash, _fileContentHash, _fileContentDeHash, _fileHash, _fileDeHash, 
    _verifySHAHash, _verifyFileContentHash, _verifyHashedFile, _verifyFile,
    _encryptFile, _decryptFile, _createSign, _createSignVerify
 } = require("../index.js");
console.log(createSHA, hashContent, dehashContent, hashFile, dehashFile,
    verifySHA, verifyFileContent, verifyHashedFile, verifyFile,
    encrypt, decrypt, createSign, createSignVerify, getCiphers, getHashes,
    
    _createSHAHash, _fileContentHash, _fileContentDeHash, _fileHash, _fileDeHash, 
    _verifySHAHash, _verifyFileContentHash, _verifyHashedFile, _verifyFile,
    _encryptFile, _decryptFile, _createSign, _createSignVerify);
