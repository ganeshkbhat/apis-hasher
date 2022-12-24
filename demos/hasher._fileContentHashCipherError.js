/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher.hasher._fileContentHashCipherError.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const crypto = require("crypto");
const _filelock = require("../index.js");
const salt = "foobar";

let reshash = _filelock._fileContentHash("My personal data to hash", salt, "aes-256-ctrs", "sha256", "base64", { logger: console.log });
console.log("[hasher-apis] demos/hasher._fileContentHash.js: filelock - ", reshash);
