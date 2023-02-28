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


let content = `This is a file containing a collection of programming languages.
1. C
2. C++
3. Python`;


// Hash P2 File
let h2 = _filelock._fileHashFromContent(p2, content, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let h2 = _filelock._fileHashFromContent(p2, content, salt);
console.log(h2)


// Hash P3 File
let h3 = _filelock._fileHashFromContent(p3, content, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let h3 = _filelock._fileHashFromContent(p3, content, salt);
console.log(h3)


// DeHash P2 File hashed content
let r3 = _filelock._fileDeHashContent(p2, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let r3 = _filelock._fileDeHashContent(p2, content, salt);
console.log(r3)


// DeHash P3 File hashed content
let r2 = _filelock._fileDeHashContent(p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
// let r2 = _filelock._fileDeHashContent(p3, salt);
console.log(r2)

