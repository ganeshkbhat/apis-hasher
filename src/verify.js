

const fs = require('fs');
const path = require('path');
const { getConstants, getSymbolsList } = require("./const.js");


/**
 * _verifySHAHash
 *
 * @param {*} data
 * @param {*} SHAHashToCheck
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
module.exports.verify = module.exports.SHA = function verifySHA(data, SHAHashToCheck, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    let hashToCheck = SHAHashToCheck;
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    if (hashToCheck === _createSHAHash(data, algorithm, digest, options)) return true;
}

/**
 * 
 * _verifyFileContentHash
 * rename compareContent
 *
 * @param {*} data
 * @param {*} hashToCheck
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
module.exports.contentChecksum = function compareContentChecksum(data, hashToCheck, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    let hashdata = _fileContentHash(data, salt, algorithm, keyAlgorithm, digest, options);
    return _verifySHAHash(_createSHAHash(hashdata), _createSHAHash(hashToCheck), algorithm, digest, options);
}

/**
 * _verifyFile
 *
 * @param {*} remotePath
 * @param {*} checksum
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [default: "base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
module.exports.checksum = module.exports.fileWithChecksum = function fileWithChecksum(remotePath, checksum, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    let hashdata = fs.readFileSync(remotePath, { encoding: options.encoding ? options.encoding : "utf-8", flag: "r" });
    return _verifySHAHash(_createSHAHash(hashdata), checksum, algorithm, digest, options);
}

/**
 * _verifyHashedFile, verifyHashedFile
 *
 * @param {*} remotePath
 * @param {*} hashToCheck Content Hashed Data [Check for direct checks checksum as well]
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
module.exports.fileWithContent = function fileWithContent(remotePath, hashToCheck, algorithm = "sha256", digest = "base64", options = { logger: console.log }) {
    if (!hashToCheck) throw new Error("Hash to Check not provided");
    return _verifyFile(remotePath, _createSHAHash(hashToCheck), algorithm, digest, options);
}

/**
 * _createSign
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
module.exports.createSign = function createSign(data, algorithm, base, keyGenType, keyOptions, options, encryptType, padding) {
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
                padding: getConstants("RSA_PKCS1_PADDING"),
                ...options
            };
            signature = crypto.sign(algorithm, Buffer.from(data), options).toString(base);
            break;
    }

    return { privateKey: privateKey, publicKey: publicKey, signature: signature };
}

/**
 * _createSignVerify
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
module.exports.createSignVerify = function createSignVerify(data, signature, publicKey, algorithm, base, options, encryptType) {
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

module.exports.default = {
    SHA: verifySHA,
    verify: verifySHA,
    contentChecksum: compareContentChecksum,
    compareContentChecksum: compareContentChecksum,
    checksum: fileWithChecksum,
    fileWithChecksum,
    fileWithContent,
    createSign,
    createSignVerify
}
