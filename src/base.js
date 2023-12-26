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
    if (!hashesList.includes(algorithm)) throw new Error("[_createSHAHash] Hashes Algorithm not in list of included hashes " + JSON.stringify(hashesList))
    var hash = crypto.createHash(algorithm).update(JSON.stringify(data)).digest(digest);
    return hash;
}




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

