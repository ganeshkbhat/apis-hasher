/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: hasher.js
 * File Description: 
 * 
 * PKCS: https://stackoverflow.com/questions/5866129/rsa-encryption-problem-size-of-payload-data/5868456#5868456
 * OAEP: https://crypto.stackexchange.com/questions/42097/what-is-the-maximum-size-of-the-plaintext-message-for-rsa-oaep/42100#42100
 * 
*/

/* eslint no-console: 0 */

'use strict';

const fs = require('fs');
const { getConstants, getSymbolList } = require("./const.js");

/**
 *
 *
 * @param {*} data
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function _createSHAHash(data, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    const crypto = require('crypto');
    const hashesList = crypto.getHashes();
    if (!hashesList.includes(algorithm)) throw new Error("[_createSHAHash] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList))
    var hash = crypto.createHash(algorithm).update(JSON.stringify(data)).digest(digest);
    return hash;
}


/**
 *
 * reference: https://attacomsian.com/blog/nodejs-encrypt-decrypt-data
 * 
 * @param {*} data
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function _fileContentHash(data, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    const crypto = require('crypto');

    const hashesList = crypto.getHashes();
    const ciphersList = crypto.getCiphers();
    if (!hashesList.includes(keyAlgorithm)) throw new Error("[_fileContentHash] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList));
    if (!ciphersList.includes(algorithm)) throw new Error("[_fileContentHash] Ciphers Algorithm not in list of included ciphers " + JSON.stringify(ciphersList));

    const iv = crypto.randomBytes(16);
    const key = crypto.createHash(keyAlgorithm).update(JSON.stringify(salt)).digest(digest);
    const key_in_bytes = Buffer.from(key, digest);

    const cipher = crypto.createCipheriv(algorithm, key_in_bytes, iv);
    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

    return {
        iv: iv.toString(digest),
        content: encrypted.toString(digest)
    };
}


/**
 *
 *
 * @param {*} hashdata
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function _fileContentDeHash(hashdata, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    const crypto = require('crypto');

    const hashesList = crypto.getHashes();
    const ciphersList = crypto.getCiphers();
    if (!hashesList.includes(keyAlgorithm)) throw new Error("[_fileContentDeHash] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList));
    if (!ciphersList.includes(algorithm)) throw new Error("[_fileContentDeHash] Ciphers Algorithm not in list of included ciphers " + JSON.stringify(ciphersList));

    const key = crypto.createHash(keyAlgorithm).update(JSON.stringify(salt)).digest(digest);
    const key_in_bytes = Buffer.from(key, digest);

    const decipher = crypto.createDecipheriv(algorithm, key_in_bytes, Buffer.from(hashdata.iv, digest));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hashdata.content, digest)), decipher.final()]);
    return decrpyted.toString();
}


/**
 *
 *
 * @param {*} data
 * @param {*} hashToCheck
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function _verifySHAHash(data, hashToCheck, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    if (hashToCheck === _createSHAHash(data, algorithm, digest, options)) return true;
}


/**
 *
 *
 * @param {*} data
 * @param {*} hashToCheck
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function _verifyFileContentHash(data, hashToCheck, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    let hashdata = _fileContentHash(data, salt, algorithm, keyAlgorithm, digest, options);
    return _verifySHAHash(_createSHAHash(hashdata), _createSHAHash(hashToCheck), algorithm, digest, options);
}


/**
 *
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
function _fileHash(remotePath, remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let data = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let hashdata = _fileContentHash(data, salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, JSON.stringify(hashdata), { encoding: options.encoding ? options.encoding : "utf-8", flag: "w" });
    return hashdata;
}


/**
 *
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
function _fileDeHash(remotePath, remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
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
function _fileHashFromContent(remoteDestPath, data, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    // let data = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let hashdata = _fileContentHash(data, salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, JSON.stringify(hashdata), { encoding: options.encoding ? options.encoding : "utf-8", flag: "w" });
    return hashdata;
}

/**
 * fileDeHashContent
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
function _fileDeHashContent(remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let hashdata = fs.readFileSync(remoteDestPath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let data = _fileContentDeHash(JSON.parse(hashdata), salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, data);
    return data;
}


/**
 * fileDeHashLoadContent
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
function _fileDeHashLoadContent(remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let hashdata = fs.readFileSync(remoteDestPath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let data = _fileContentDeHash(JSON.parse(hashdata), salt, algorithm, keyAlgorithm, digest, options);
    // fs.writeFileSync(remoteDestPath, data);
    return data;
}


/**
 *
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
function _encryptFile(remotePath, remoteDestPath, algorithm = "sha256", keyAlgorithm = "rsa", digest = "base64", keyOptions = { modulusLength: 2048 }, options = { modulusLength: 2048 }) {
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
 *
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
function _decryptFile(remotePath, remoteDestPath, privateKey, algorithm = "sha256", keyAlgorithm = "rsa", digest = "base64", options = { modulusLength: 2048 }) {
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
 *
 *
 * @param {*} remotePath
 * @param {*} checksum
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [default: "base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function _verifyFile(remotePath, checksum, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    let hashdata = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    return _verifySHAHash(_createSHAHash(hashdata), checksum, algorithm, digest, options);
}


/**
 *
 *
 * @return {*} 
 */
function getCiphers() {
    return require('crypto').getCiphers();
}


/**
 *
 *
 * @return {*} 
 */
function getHashes() {
    return require('crypto').getHashes();
}


/**
 *
 *
 * @param {*} remotePath
 * @param {*} hashToCheck
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function _verifyHashedFile(remotePath, hashToCheck, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    return _verifyFile(remotePath, _createSHAHash(hashToCheck), algorithm, digest, options);
}


/**
 *
 *
 * @param {string} [keyGenType="rsa"] [default: "rsa"] [options: 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh']
 * @param {*} [options={ modulusLength: 2048 }] [default: { modulusLength: 2048 }] 
 * @return {*} 
 */
function _genKeyPair(keyGenType = "rsa", options = { modulusLength: 2048 }) {
    const crypto = require('crypto');
    const { privateKey, publicKey } = crypto.generateKeyPairSync(keyGenType, options);
    return { privateKey, publicKey }
}


/**
 *
 *
 * @param {*} data
 * @param {*} algorithm [default: "SHA256"] [options: use function getHashes]
 * @param {*} base [default: "hex"] [options: ]
 * @param {*} keyGenType [default: "rsa"] [options: 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh']
 * @param {*} keyOptions [default: For createSign & publicEncrypt: { modulusLength: 2048 }]
 * @param {*} options [default: For createSign: { modulusLength: 2048 }, For publicEncrypt: { padding: crypto.constants.RSA_PKCS1_PSS_PADDING}]
 * @param {*} encryptType [default: "createSign"] [options: createSign, publicEncrypt]
 * @return {*} 
 */
function _createSign(data, algorithm, base, keyGenType, keyOptions, options, encryptType, padding) {
    const crypto = require('crypto');

    algorithm = algorithm || "sha256";
    base = base || "hex";
    keyGenType = keyGenType || "rsa";
    keyOptions = keyOptions || { modulusLength: 2048 };
    options = options || { modulusLength: 2048 };
    encryptType = encryptType || "createSign";

    const { privateKey, publicKey } = _genKeyPair(keyGenType, keyOptions);

    let signature;
    switch (encryptType) {
        case "createSign":
            let sign = crypto.createSign(algorithm, options);
            sign.write(data);
            sign.end();
            signature = sign.sign(privateKey, base);
            break;
        case "publicEncrypt":
            options = {
                key: privateKey,
                padding: getConstants("RSA_PKCS1_OAEP_PADDING"),
                ...options
            };
            signature = crypto.sign(algorithm, Buffer.from(data), options).toString(base);
            break;
    }

    return { privateKey: privateKey, publicKey: publicKey, signature: signature };
}


/**
 *
 *
 * @param {*} data
 * @param {*} signature
 * @param {*} publicKey
 * @param {*} algorithm [default: "SHA256"] [options: use function getHashes]
 * @param {*} base [default: "hex"] [options: ]
 * @param {*} options [default: For createSign: { modulusLength: 2048 }, For publicEncrypt: { padding: crypto.constants.RSA_PKCS1_PSS_PADDING }]
 * @param {*} encryptType [default: "createSign"] [options: createSign, publicEncrypt]
 * @return {*} 
 */
function _createSignVerify(data, signature, publicKey, algorithm, base, options, encryptType) {
    const crypto = require('crypto');

    algorithm = algorithm || "sha256";
    base = base || "hex";
    options = options || { modulusLength: 2048 };
    encryptType = encryptType || "createSign";

    switch (encryptType) {
        case "createSign":
            let verify = crypto.createVerify(algorithm, { modulusLength: 2048, ...options });
            verify.write(data);
            verify.end();
            return verify.verify(publicKey, signature, base);
        case "publicEncrypt":
            return crypto.verify(
                algorithm,
                Buffer.from(data),
                { key: publicKey, padding: getConstants("RSA_PKCS1_OAEP_PADDING"), ...options },
                Buffer.from(signature, base)
            )
    }
}


module.exports.createSHA = _createSHAHash;
module.exports.hashContent = _fileContentHash;
module.exports.dehashContent = _fileContentDeHash;

module.exports.hashFile = _fileHash;
module.exports.dehashFile = _fileDeHash;

module.exports.verifySHA = _verifySHAHash;
module.exports.verifyFileContent = _verifyFileContentHash;
module.exports.verifyHashedFile = _verifyHashedFile;
module.exports.verifyFile = _verifyFile;

module.exports.encrypt = _encryptFile;
module.exports.decrypt = _decryptFile;

module.exports._genKeyPair = _genKeyPair;
module.exports.genKeyPair = _genKeyPair;

module.exports.getCiphers = getCiphers;
module.exports.getHashes = getHashes;

module.exports._getCiphers = getCiphers;
module.exports._getHashes = getHashes;

module.exports.createSign = _createSign;
module.exports.createSignVerify = _createSignVerify;

module.exports._createSHAHash = _createSHAHash;
module.exports._fileContentHash = _fileContentHash;
module.exports._fileContentDeHash = _fileContentDeHash;

module.exports._fileHash = _fileHash;
module.exports._fileDeHash = _fileDeHash;

module.exports._fileHashFromContent = _fileHashFromContent;
module.exports._fileDeHashContent = _fileDeHashContent;
module.exports._fileDeHashLoadContent = _fileDeHashLoadContent;

module.exports._verifySHAHash = _verifySHAHash;
module.exports._verifyFileContentHash = _verifyFileContentHash;
module.exports._verifyHashedFile = _verifyHashedFile;
module.exports._verifyFile = _verifyFile;

module.exports._encryptFile = _encryptFile;
module.exports._decryptFile = _decryptFile;

module.exports._createSign = _createSign;
module.exports._createSignVerify = _createSignVerify;

module.exports.getConstants = getConstants;
module.exports.getSymbolsList = getSymbolsList;
