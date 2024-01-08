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

'use strict';

const fs = require("fs");
const _filelock = require("../index.js");
const salt = "foobar";
const p1 = "./programming.base.txt";
const p2 = "./programming.hashed.txt";
const p3 = "./programming.hash.rehash.txt";


// Hash P1 File to P2
let h1 = _filelock.hashFile(p1, p2, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let h1 = _filelock.hashFile(p1, p2, salt);
console.log(h1)

// Hash P1 File to P3
let h2 = _filelock.hashFile(p1, p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let h2 = _filelock.hashFile(p1, p3, salt);
console.log(h2)

// DeHash P3 File hashed content to P1
let r1 = _filelock.dehashFile(p3, p1, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let r1 = _filelock.dehashFile(p3, p1, salt);
console.log(r1)

// DeHash P3 File hashed content to P3
let r2 = _filelock.dehashFile(p3, p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let r2 = _filelock.dehashFile(p3, p3, salt);
console.log(r2)

// Hash P3 File to P3
let h3 = _filelock.hashFile(p3, p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let h3 = _filelock.hashFile(p3, p3, salt);
console.log(h3)

// DeHash P3 File hashed content to P3
let r3 = _filelock.dehashFile(p3, p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let r3 = _filelock.dehashFile(p3, p3, salt);
console.log(r3)
