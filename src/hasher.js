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
*/

/* eslint no-console: 0 */

'use strict';

const fs = require('fs');

/**
 *
 *
 * @param {string} [algorithm="sha256"] Algorythm Options: sha1, sha256, sha512
 * @param {*} data
 * @param {*} digest
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _createSHAHash(algorithm = "sha256", data, digest, options = { logger: console.log }) {
    const crypto = require('crypto');
    const hashesList = crypto.getHashes();
    if (!hashesList.includes(algorithm)) throw new Error("[_createSHAHash] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList))
    var hash = crypto.createHash(algorithm).update(JSON.stringify(data)).digest(digest);
    options.logger("[require-urls]: filelock.js._createSHAHash: Hash created is ", hash);
    return hash;
}

/**
 *
 *
 * @param { string } hashdata
 * @param { string } [algorithm=["aes-256-ctr", "sha256"]]
 * @param { string } salt
 * @param { string } [digest=['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _fileContentDeHash(hashdata, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {
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
 * @param {*} digest ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']
 * @param {*} [options={ logger: console.log }]
 * 
 * reference: https://attacomsian.com/blog/nodejs-encrypt-decrypt-data
 * 
 */
function _fileContentHash(data, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {
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
 * @param {string} [algorithm="sha256"]
 * @param {*} data
 * @param {*} digest
 * @param {*} hashToCheck
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _verifySHAHash(algorithm = "sha256", data, digest, hashToCheck, options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    if (hashToCheck === _createSHAHash(algorithm, data, digest, options)) return true;
}

/**
 *
 *
 * @param {*} data
 * @param {string} [algorithm="sha256"]
 * @param {*} digest
 * @param {*} hashToCheck
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _verifyFileContentHash(data, algorithm = "sha256", digest, hashToCheck, options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    let hashdata = _fileContentHash(data, algorithm, keyAlgorithm, salt, digest, options);
    return _verifySHAHash(algorithm, _createSHAHash(hashdata), digest, _createSHAHash(hashToCheck), options);
}

/**
 * Hash
 *
 * @param {*} remotePath
 * @param {string} [algorithm="aes-256-ctr"]
 * @param {string} [keyAlgorithm="sha256"]
 * @param {*} salt
 * @param {string} [digest="base64"]
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _fileHash(remotePath, remoteDestPath, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {
    let data = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let hashdata = _fileContentHash(data, algorithm, keyAlgorithm, salt, digest, options);
    fs.writeFileSync(remoteDestPath, JSON.stringify(hashdata), { encoding: options.encoding ? options.encoding : "utf-8", flag: "w" });
    return hashdata;
}

/**
 * DeHash a hashed file
 *
 * @param {*} remotePath
 * @param {string} [algorithm="aes-256-ctr"]
 * @param {string} [keyAlgorithm="sha256"]
 * @param {*} salt
 * @param {string} [digest="base64"]
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _fileDeHash(remotePath, remoteDestPath, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {
    let hashdata = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let data = _fileContentDeHash(JSON.parse(hashdata), algorithm, keyAlgorithm, salt, digest, options);
    fs.writeFileSync(remoteDestPath, data);
    return data;
}

/**
 *
 *
 * @param {*} remotePath
 * @param {*} remoteDestPath
 * @param {string} [algorithm="aes-256-ctr"]
 * @param {string} [keyAlgorithm="sha256"]
 * @param {*} salt
 * @param {string} [digest="base64"]
 * @param {*} [options={ logger: console.log }]
 */
function _encryptFile(remotePath, remoteDestPath, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {

}

/**
 *
 *
 * @param {*} remotePath
 * @param {*} remoteDestPath
 * @param {string} [algorithm="aes-256-ctr"]
 * @param {string} [keyAlgorithm="sha256"]
 * @param {*} salt
 * @param {string} [digest="base64"]
 * @param {*} [options={ logger: console.log }]
 */
function _decryptFile(remotePath, remoteDestPath, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", salt, digest = "base64", options = { logger: console.log }) {

}

/**
 *
 *
 * @param {*} remotePath
 * @param {string} [algorithm="sha256"]
 * @param {*} digest
 * @param {*} checksum
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _verifyFile(remotePath, algorithm = "sha256", digest, checksum, options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    let hashdata = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    return _verifySHAHash(algorithm, _createSHAHash(hashdata), digest, checksum, options);
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
 * @param {*} data
 * @param {string} [algorithm="sha256"]
 * @param {*} digest
 * @param {*} hashToCheck
 * @param {*} [options={ logger: console.log }]
 * @return {*} 
 */
function _verifyHashedFile(remotePath, algorithm = "sha256", digest, hashToCheck, options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    return _verifyFile(remotePath, algorithm = "sha256", digest, _createSHAHash(hashToCheck), options);
}

/**
 *
 *
 * @param {string} [keyGenType="rsa"]
 * // 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh'
 * @param {*} [options={ modulusLength: 2048 }]
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
 * @param {string} [algorithm="SHA256"]
 * @param {string} [base="hex"]
 * @param {string} [keyGenType="ec"]
 * @param {string} [options={ namedCurve: 'secret' }]
 * @return {*} { privateKey, publicKey, signature }
 */
function _createSign(data, algorithm, base, keyGenType, keyOptions, options, encryptType = "createSign") {
    const crypto = require('crypto');

    algorithm = algorithm || "SHA256";
    keyGenType = keyGenType || "rsa";
    base = base || "hex";
    keyOptions = keyOptions || { modulusLength: 2048 };
    options = options || { modulusLength: 2048 };
    const { privateKey, publicKey } = _genKeyPair(keyGenType, keyOptions);

    let signature;
    switch (encryptType) {
        case "createSign":
            options = options || { modulusLength: 2048 };
            let sign = crypto.createSign(algorithm, options);
            sign.write(data);
            sign.end();
            signature = sign.sign(privateKey, base);
            break;
        case "publicEncrypt":
            options = {
                key: privateKey,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
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
 * @param {string} [algorithm="SHA256"]
 * @param {string} [base="hex"]
 * @param {*} publicKey
 * @return {*} 
 */
function _createSignVerify(data, algorithm, base, signature, publicKey, options, encryptType = "createSign") {
    const crypto = require('crypto');

    algorithm = algorithm || "SHA256";
    options = options || {};
    base = base || "hex";

    switch (encryptType) {
        case "createSign":
            let verify = crypto.createVerify(algorithm, options || { modulusLength: 2048 });
            verify.write(data);
            verify.end();
            return verify.verify(publicKey, signature, base);
        case "publicEncrypt":
            options = options || {
                key: publicKey,
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING
            }
            return crypto.verify(
                algorithm,
                Buffer.from(data),
                { key: publicKey, ...options },
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

module.exports.getCiphers = getCiphers;
module.exports.getHashes = getHashes;

module.exports.createSign = _createSign;
module.exports.createSignVerify = _createSignVerify;


module.exports._createSHAHash = _createSHAHash;
module.exports._fileContentHash = _fileContentHash;
module.exports._fileContentDeHash = _fileContentDeHash;

module.exports._fileHash = _fileHash;
module.exports._fileDeHash = _fileDeHash;

module.exports._verifySHAHash = _verifySHAHash;
module.exports._verifyFileContentHash = _verifyFileContentHash;
module.exports._verifyHashedFile = _verifyHashedFile;
module.exports._verifyFile = _verifyFile;

module.exports._encryptFile = _encryptFile;
module.exports._decryptFile = _decryptFile;

module.exports._createSign = _createSign;
module.exports._createSignVerify = _createSignVerify;
