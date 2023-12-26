
const fs = require('fs');
const path = require('path');
const { getConstants, getSymbolsList } = require("./const.js");


/**
 * _encryptFile
 *
 * @param {*} remotePath
 * @param {*} remoteDestPath
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [default: "base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { modulusLength: 2048 }]
 * @return {*} 
 * 
 * Reference file - Better the function: _encryptFile, _decryptFile
 * https://www.sohamkamani.com/nodejs/rsa-encryption/
 * 
 */
module.exports.encryptWithKeysFromTo = function encryptWithKeysFromTo(remotePath, remoteDestPath, algorithm = "sha256", keyAlgorithm = "rsa", digest = "base64", keyOptions = { modulusLength: 2048 }, options = { modulusLength: 2048 }) {
    const crypto = require('crypto');
    let data = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });

    algorithm = algorithm || "sha256";
    keyAlgorithm = keyAlgorithm || "rsa";
    digest = digest || "base64";
    keyOptions = keyOptions || { modulusLength: 2048 };
    options = options || { modulusLength: 2048 };

    const { privateKey, publicKey } = _genKeyPair(keyAlgorithm, keyOptions);

    let encrypted = crypto.publicEncrypt({
        key: publicKey,
        padding: getConstants("RSA_PKCS1_PADDING"),
        oaepHash: algorithm
    },
        Buffer.from(data)
    ).toString(digest);

    fs.writeFileSync(remoteDestPath, encrypted);
    return {
        privateKey: privateKey,
        publicKey: publicKey,
        encrypted: encrypted
    }
}

/**
 * _decryptFile
 *
 * @param {*} remotePath
 * @param {*} remoteDestPath
 * @param {*} privateKey
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [default: "base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { modulusLength: 2048 }]
 * @return {*} 
 * @param {*} [options={ modulusLength: 2048 }]
 * @return {*} 
 */
module.exports.decryptWithKeysFromTo = function decryptWithKeysFromTo(remotePath, remoteDestPath, privateKey, algorithm = "sha256", keyAlgorithm = "rsa", digest = "base64", options = { modulusLength: 2048 }) {
    const crypto = require('crypto');
    let hashdata = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });

    algorithm = algorithm || "sha256";
    keyAlgorithm = keyAlgorithm || "rsa";
    digest = digest || "base64";
    options = options || { modulusLength: 2048 };

    let decrypted = crypto.privateDecrypt({
        key: privateKey,
        padding: getConstants("RSA_PKCS1_PADDING"),
        oaepHash: algorithm
    },
        Buffer.from(hashdata, digest)
    );

    fs.writeFileSync(remoteDestPath, decrypted);
    return {
        decrypted: decrypted.toString("utf-8")
    }
}

/**
 * _fileHash
 * 
 * should write files
 *
 * @param {*} remotePath
 * @param {*} remoteDestPath
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
module.exports.encryptFromTo = function encryptFromTo(remotePath, remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let data = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let hashdata = _fileContentHash(data, salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, JSON.stringify(hashdata), { encoding: options.encoding ? options.encoding : "utf-8", flag: "w" });
    return hashdata;
}

/**
 * _fileDeHash
 * 
 * should write files
 *
 * @param {*} remotePath
 * @param {*} remoteDestPath
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
module.exports.decryptFromTo = function decryptFromTo(remotePath, remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let hashdata = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let data = _fileContentDeHash(JSON.parse(hashdata), salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, data);
    return data;
}

/**
 * _fileHashFromContent
 * file uses _fileContentHash function
 *
 * @param {*} remoteDestPath
 * @param {*} data
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
module.exports.encryptContentTo = function encryptContentTo(remoteDestPath, data, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    // let data = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let hashdata = _fileContentHash(data, salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, JSON.stringify(hashdata), { encoding: options.encoding ? options.encoding : "utf-8", flag: "w" });
    return hashdata;
}

/**
 * fileDeHashContent
 * _fileDeHashContent
 * file uses _fileContentDeHash
 *
 * @param {*} remoteDestPath
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
module.exports.decryptContentFrom = function decryptContentFrom(remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let hashdata = fs.readFileSync(remoteDestPath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let data = _fileContentDeHash(JSON.parse(hashdata), salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, data);
    return data;
}

/**
 * fileDeHashLoadContent
 * _fileDeHashLoadContent
 * file uses _fileContentDeHash
 *
 * @param {*} remoteDestPath
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
module.exports.loadContentFrom = function loadContentFrom(remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let hashdata = fs.readFileSync(remoteDestPath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let data = _fileContentDeHash(JSON.parse(hashdata), salt, algorithm, keyAlgorithm, digest, options);
    // fs.writeFileSync(remoteDestPath, data);
    return data;
}


module.exports.default = {
    encryptWithKeysFromTo,
    decryptWithKeysFromTo,
    encryptFromTo,
    decryptFromTo,
    encryptContentTo,
    decryptContentFrom,
    loadContentFrom
}
