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

let content = `This is a file containing a collection of programming languages.
1. C
2. C++
3. Python`;


// Hash P3 File
let h3 = _filelock._fileHashFromContent(p3, content, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let h3 = _filelock._fileHashFromContent(p3, content, salt);
console.log("[hasher._fileHashFromContent]: File hashed");
console.log(h3);


// DeHash P2 File
let h2 = _filelock._fileHashFromContent(p2, content, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let h2 = _filelock.de_fileHashFromContent(p2, content, salt);
console.log("[hasher._fileHashFromContent]: File hashed");
console.log(h2);


// DeHash P3 File
let l3 = _filelock._fileDeHashLoadContent(p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let l3 = _filelock._fileDeHashLoadContent(p3, salt);
console.log("[hasher._fileDeHashLoadContent]: File dehashed load");
console.log(l3);


// DeHash P2 File
let l2 = _filelock._fileDeHashLoadContent(p2, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let l2 = _filelock._fileDeHashLoadContent(p2, salt);
console.log("[hasher._fileDeHashLoadContent]: File dehashed load");
console.log(l2);


// DeHash P3 File
let r3 = _filelock._fileDeHashContent(p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let r3 = _filelock._fileDeHashContent(p3, salt);
console.log("[hasher._fileDeHashContent]: File dehashed");
console.log(r3);


// DeHash P2 File
let r2 = _filelock._fileDeHashContent(p2, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let r2 = _filelock._fileDeHashContent(p2, salt);
console.log("[hasher._fileDeHashContent]: File dehashed");
console.log(r2);
