/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: index.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


/**
 *
 *
 * @param {*} data
 * @param {*} digest
 * @return {*} 
 */
 function _fileContentSHAHash(algorithm = "sha256", data, digest, options = { logger: console.log }) {
    const crypto = require('crypto');
    var hash = crypto.createHash(algorithm).update(JSON.stringify(data)).digest(digest);
    options.logger("[require-urls]: filelock.js._fileContentSHAHash: Hash created is ", hash);
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
 * @param {*} remotePath
 * @param {*} options
 */
function _verifyFilelockFile(remotePath, options) { }

/**
 *
 *
 * @param {*} remotePath
 * @param {*} options
 */
function _verifyFilelock(remotePath, options) { }
