/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher._fileContentDeHash.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

const fs = require("fs");
const _filelock = require("../index.js");
const salt = "foobar";
const p1 = "./programming.base.txt";
const p2 = "./programming.hashed.txt";
const p3 = "./programming.hash.rehash.txt";


// Hash P3 File to P3
let { privateKey, publicKey, encrypted } = _filelock.encrypt(p3, p3, "sha256", "rsa", "base64", { modulusLength: 2048 }, { modulusLength: 2048 });
// let { privateKey, publicKey, encrypted } = _filelock.encrypt(p3, p3);
console.log("[hasher._fileHash]: File hashed");
console.log(encrypted);


// DeHash P3 File hashed content to P3
let r3 = _filelock.decrypt(p3, p3, privateKey, "sha256", "rsa", "base64", { modulusLength: 2048 });
// let r3 = _filelock.decrypt(p3, p3, privateKey);
console.log("[hasher._fileHash]: File dehashed");
console.log(r3);
