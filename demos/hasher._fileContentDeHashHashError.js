/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher.hasher._fileContentDeHashHashError.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const _filelock = require("../index.js");
const salt = "foobar";

let dehash = _filelock._fileContentDeHash({
    iv: 'eEahOe0F0Rujig/yBTHFWQ==',
    content: '6pRvpFZZutKXhavJVItvOk+8DeHETwPD'
}, "aes-256-ctr", "sha256s", salt, "base64", { logger: console.log });

console.log("[hasher-apis] demos/hasher-apis._fileContentDeHash.js: filelock - ", dehash);

