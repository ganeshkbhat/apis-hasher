/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher.openssl.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

/**  
 * // // USAGE:
 * // // openssl.run(command, rootDir)
 * // // 
 * // // let openSSL = new OpenSSL({ fs, rootDir });
 * // // let result1 = await openSSL.runCommand(`genrsa -out /private.pem`);
 * // // let result2 = await openSSL.runCommand(`rsa -in /private.pem -pubout`);
*/

import * as openssl from "../src/openssl.js";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
import fs from "fs";
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const opensslrun = function (command, rootDir) {
  return openssl.run(command, rootDir).then(d => console.log("Wrapped Creating file"));
}

let rootDir = path.resolve(path.join(__dirname, "../demos/keys"));
let command = `genrsa -out /private.pem`;
opensslrun(command, rootDir);
