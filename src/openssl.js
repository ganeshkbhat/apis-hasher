/**
 *
 * Package: hasher-apis
 * Author: Ganesh B
 * Description:
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: src/openssl.js
 * File Description:
 * More details: https://www.npmjs.com/package/openssl.js
 * 
*/

/* eslint no-console: 0 */

'use strict'

import { OpenSSL } from "openssl.js";
import fs from "fs";

/**
 * isBrowser
 *
 * @return {*} 
 */
function isBrowser() {
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }
  if (typeof importScripts === "function") { return false; }
  if (typeof window === "object") { return true; }
}

/**
 *
 *
 * @param {*} dirPath
 * @return {*} 
 */
function createDir(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log('Directory created:', dirPath);
    }
    return true;
  } catch (e) {
    console.log('Error Creating Directory:', JSON.stringify(e));
    return false;
  }
}

/**
 *
 *
 * @export
 * @param {*} command
 * @param {*} rootDir
 * @return {*} 
 */
async function run(command, rootDir) {
  let created = createDir(rootDir);
  if (!created) { return false; }
  let openSSL = new OpenSSL({ fs, rootDir });
  return await openSSL.runCommand(command);
}



module.exports.default = {
  createDir,
  runCommand: OpenSSL.runCommand,
  run
}

module.exports.createDir = createDir;
module.exports.runCommand = OpenSSL.runCommand;
module.exports.run = run;
module.exports.createDir = createDir;
