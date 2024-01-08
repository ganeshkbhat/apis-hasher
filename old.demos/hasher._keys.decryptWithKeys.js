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

var fs = require("fs");
var hash = require("../index");

let content = fs.readFileSync("./demos/programming.encryptwithkey.txt", {encoding: "utf-8"});
let data = hash.decryptWithKey(content, { privateKeyPath: "./demos/privateKey.pem"});
fs.writeFileSync("./demos/programming.encryptwithkey.txt", data, { encoding: "utf-8"});



