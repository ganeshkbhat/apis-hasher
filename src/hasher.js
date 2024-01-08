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
const path = require('path');
const { getConstants, getSymbolsList } = require("./const.js");

module.exports.getConstants = getConstants;
module.exports.getSymbolsList = getSymbolsList;

/**
 *
 *
 * @param {*} data
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function createSHA(data, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    const crypto = require('crypto');
    const hashesList = crypto.getHashes();
    if (!hashesList.includes(algorithm)) throw new Error("[createSHA] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList))
    var hash = crypto.createHash(algorithm).update(JSON.stringify(data)).digest(digest);
    return hash;
}

module.exports._createSHAHash = createSHA;
module.exports.createSHA = createSHA;

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
function hashContent(data, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    const crypto = require('crypto');

    const hashesList = crypto.getHashes();
    const ciphersList = crypto.getCiphers();
    if (!hashesList.includes(keyAlgorithm)) throw new Error("[hashContent] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList));
    if (!ciphersList.includes(algorithm)) throw new Error("[hashContent] Ciphers Algorithm not in list of included ciphers " + JSON.stringify(ciphersList));

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

module.exports._fileContentHash = hashContent;
module.exports.hashContent = hashContent;

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
function dehashContent(hashdata, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    const crypto = require('crypto');

    const hashesList = crypto.getHashes();
    const ciphersList = crypto.getCiphers();
    if (!hashesList.includes(keyAlgorithm)) throw new Error("[dehashContent] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList));
    if (!ciphersList.includes(algorithm)) throw new Error("[dehashContent] Ciphers Algorithm not in list of included ciphers " + JSON.stringify(ciphersList));

    const key = crypto.createHash(keyAlgorithm).update(JSON.stringify(salt)).digest(digest);
    const key_in_bytes = Buffer.from(key, digest);

    const decipher = crypto.createDecipheriv(algorithm, key_in_bytes, Buffer.from(hashdata.iv, digest));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hashdata.content, digest)), decipher.final()]);
    return decrpyted.toString();
}

module.exports._fileContentDeHash = dehashContent;
module.exports.dehashContent = dehashContent;

/**
 *
 *
 * @param {*} data
 * @param {*} SHAHashToCheck
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function verifySHA(data, SHAHashToCheck, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let hashToCheck = SHAHashToCheck;
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    if (hashToCheck === createSHA(data, algorithm, digest, options)) return true;
}

module.exports._verifySHAHash = verifySHA;
module.exports.verifySHA = verifySHA;

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
function verifyContents(data, hashToCheck, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    let hashdata = hashContent(data, salt, algorithm, keyAlgorithm, digest, options);
    return verifySHA(createSHA(hashdata), createSHA(hashToCheck), algorithm, digest, options);
}

module.exports._verifyFileContentHash = verifyContents;
module.exports.verifyFileContent = verifyContents;

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
function verifyFileChecksum(remotePath, checksum, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    let hashdata = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    return verifySHA(createSHA(hashdata), checksum, algorithm, digest, options);
}

module.exports._verifyFile = verifyFileChecksum;
module.exports.verifyFileChecksum = verifyFileChecksum;

/**
 * verifyFileWithEncryptedContent, verifyHashedFile
 *
 * @param {*} remotePath
 * @param {*} hashToCheck
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function verifyFileWithEncryptedContent(remotePath, hashToCheck, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    return verifyFileChecksum(remotePath, createSHA(hashToCheck), algorithm, digest, options);
}

module.exports.verifyHashedFile = verifyFileWithEncryptedContent;
module.exports._verifyHashedFile = verifyFileWithEncryptedContent;

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
function hashFile(remotePath, remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let data = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let hashdata = hashContent(data, salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, JSON.stringify(hashdata), { encoding: options.encoding ? options.encoding : "utf-8", flag: "w" });
    return hashdata;
}

module.exports.hashFile = hashFile;
module.exports._fileHash = hashFile;

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
function dehashFile(remotePath, remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let hashdata = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let data = dehashContent(JSON.parse(hashdata), salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, data);
    return data;
}

module.exports._fileDeHash = dehashFile;
module.exports.dehashFile = dehashFile;

/**
 * hashContentToFile
 * file uses hashContent function
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
function hashContentToFile(remoteDestPath, data, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    // let data = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let hashdata = hashContent(data, salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, JSON.stringify(hashdata), { encoding: options.encoding ? options.encoding : "utf-8", flag: "w" });
    return hashdata;
}

module.exports._fileHashFromContent = hashContentToFile;
module.exports.hashContentToFile = hashContentToFile;

/**
 * fileDeHashContent
 * file uses dehashContent
 *
 * @param {*} remoteDestPath
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function dehashContentFromFile(remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let hashdata = fs.readFileSync(remoteDestPath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let data = dehashContent(JSON.parse(hashdata), salt, algorithm, keyAlgorithm, digest, options);
    fs.writeFileSync(remoteDestPath, data);
    return data;
}

module.exports._fileDeHashContent = dehashContentFromFile;
module.exports.dehashContentFromFile = dehashContentFromFile;

/**
 * fileDeHashLoadContent
 * file uses dehashContent
 *
 * @param {*} remoteDestPath
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
function dehashLoadContentFromFile(remoteDestPath, salt, algorithm = "aes-256-ctr", keyAlgorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let hashdata = fs.readFileSync(remoteDestPath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    let data = dehashContent(JSON.parse(hashdata), salt, algorithm, keyAlgorithm, digest, options);
    // fs.writeFileSync(remoteDestPath, data);
    return data;
}

module.exports._fileDeHashLoadContent = dehashLoadContentFromFile;
module.exports.dehashLoadContentFromFile = dehashLoadContentFromFile;

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
 * Reference file - Better the function: encryptFile, decryptFile
 * https://www.sohamkamani.com/nodejs/rsa-encryption/
 * 
 */
function encryptFile(remotePath, remoteDestPath, algorithm = "sha256", keyAlgorithm = "rsa", digest = "base64", keyOptions = { modulusLength: 2048 }, options = { modulusLength: 2048 }) {
    const crypto = require('crypto');
    let data = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });

    algorithm = algorithm || "sha256";
    keyAlgorithm = keyAlgorithm || "rsa";
    digest = digest || "base64";
    keyOptions = keyOptions || { modulusLength: 2048 };
    options = options || { modulusLength: 2048 };

    const { privateKey, publicKey } = genKeyPair(keyAlgorithm, keyOptions);

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

module.exports.encrypt = encryptFile;
module.exports._encryptFile = encryptFile;

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
function decryptFile(remotePath, remoteDestPath, privateKey, algorithm = "sha256", keyAlgorithm = "rsa", digest = "base64", options = { modulusLength: 2048 }) {
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

module.exports.decrypt = decryptFile;
module.exports._decryptFile = decryptFile;

/**
 *
 *
 * @param {*} [options] < { [publicKey | publicKeyPath], padding, algorithm ) } >
 * @return {*} 
 */
function encryptWithKey(data, options = {}) {
    const crypto = require('crypto');
    return crypto.publicEncrypt({
        key: (!!options.publicKey) ? options.publicKey : (!!options.publicKeyPath) ? fs.readFileSync(options.publicKeyPath) : null,
        padding: getConstants("RSA_PKCS1_PADDING"),
        oaepHash: options.algorithm
    },
        Buffer.from(data)
    ).toString(options.digest || "base64");
}

module.exports._encryptWithKey = encryptWithKey;
module.exports.encryptWithKey = encryptWithKey;

/**
 *
 *
 * @param {*} hashdata
 * @param {*} [options] < { [privateKey | privateKeyPath], padding, algorithm ) } >
 * @return {*} 
 */
function decryptWithKey(hashdata, options = {}) {
    const crypto = require('crypto');
    return crypto.privateDecrypt({
        key: (!!options.privateKey) ? options.privateKey : (!!options.privateKeyPath) ? fs.readFileSync(options.privateKeyPath) : null,
        padding: options.padding || getConstants("RSA_PKCS1_PADDING"),
        oaepHash: options.algorithm
    },
        Buffer.from(hashdata, options.digest || "base64")
    ).toString(options.encoding || "utf-8");
}

module.exports._decryptWithKey = decryptWithKey;
module.exports.decryptWithKey = decryptWithKey;

/**
 *
 *
 * @param {string} [keyGenType="rsa"] [default: "rsa"] [options: 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh']
 * @param {*} [options={ modulusLength: 2048 }] [default: { modulusLength: 2048 }] 
 * @return {*} 
 */
function genKeyPair(keyGenType = "rsa", options = { modulusLength: 2048 }) {
    const crypto = require('crypto');
    const { privateKey, publicKey } = crypto.generateKeyPairSync(keyGenType, options);
    return { privateKey, publicKey }
}

module.exports._genKeyPair = genKeyPair;
module.exports.genKeyPair = genKeyPair;

/**
 * dumpKeyFile
 *
 * @param {*} filename
 * @param {*} key
 * @param {string} [format="pem"]
 * @param {string} [base="hex"]
 */
function dumpKeyFile(filename, key, format = "pem", type = "pkcs1", base = "hex") {
    // const { privateKey, publicKey } = encrypt();
    // fs.writeFileSync("public.pem", publicKey.toString('hex')); // or console.log
    // fs.writeFileSync("private.pem", privateKey.export().toString('hex'));
    // var xpem = publicKey.export({type: "pkcs1",  format: "pem"});
    // require("fs").writeFileSync("./publicKey.pem", xpem)

    filename = (!!filename.includes(format)) ? filename : path.join(filename + "." + format);
    // fs.writeFileSync(filename, key.toString(base));
    var xKpem = key.export({ type: type, format: "pem" });
    fs.writeFileSync(filename, xKpem);
    return true;
}

module.exports._dumpKeyFile = dumpKeyFile;
module.exports.dumpKeyFile = dumpKeyFile;

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
function createSign(data, algorithm, base, keyGenType, keyOptions, options, encryptType, padding) {
    const crypto = require('crypto');

    algorithm = algorithm || "sha256";
    base = base || "hex";
    keyGenType = keyGenType || "rsa";
    keyOptions = keyOptions || { modulusLength: 2048 };
    options = options || { modulusLength: 2048 };
    encryptType = encryptType || "createSign";

    const { privateKey, publicKey } = genKeyPair(keyGenType, keyOptions);

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
                padding: getConstants("RSA_PKCS1_PADDING"),
                ...options
            };
            signature = crypto.sign(algorithm, Buffer.from(data), options).toString(base);
            break;
    }

    return { privateKey: privateKey, publicKey: publicKey, signature: signature };
}

module.exports.createSign = createSign;
module.exports._createSign = createSign;

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
function createSignVerify(data, signature, publicKey, algorithm, base, options, encryptType) {
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

module.exports._createSignVerify = createSignVerify;
module.exports.createSignVerify = createSignVerify;

/**
 * getCiphers
 *
 * @return {*[]} 
 */
function getCiphers() {
    return require('crypto').getCiphers();
}

module.exports.getCiphers = getCiphers;
module.exports._getCiphers = getCiphers;

/**
 * getHashes
 *
 * @return {*[]} 
 */
function getHashes() {
    return require('crypto').getHashes();
}

module.exports.getHashes = getHashes;
module.exports._getHashes = getHashes;

/**
 * getDiffieHellman
 *
 * @param {*} groupName
 * @return {*[]} 
 */
function getDiffieHellman(groupName) {
    return require('crypto').getDiffieHellman(groupName);
}

module.exports.getDiffieHellman = getDiffieHellman;
module.exports._getDiffieHellman = getDiffieHellman;

/**
 * getFips
 *
 * @return {*[]} 
 */
function getFips() {
    return require('crypto').getFips();
}

module.exports.getFips = getFips;
module.exports._getFips = getFips;

/**
 * getRandomValues
 *
 * @param {*} typedArray
 * @return {*[]} 
 */
function getRandomValues(typedArray) {
    return require('crypto').getRandomValues(typedArray);
}

module.exports.getRandomValues = getRandomValues;
module.exports._getRandomValues = getRandomValues;
