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

import { OpenSSL } from "../dist/browser.openssl.js";
/** @wasmer/wasmfs */
import WasmFs from "./wasmfs.esm.js";

const wasmFs = new WasmFs();

(async function () {
  let openSSL = new OpenSSL({
    fs: wasmFs.fs,
    rootDir: "/",
    wasmBinaryPath: "../dist/openssl.wasm"
  });

  let result1 = await openSSL.runCommand(
    "genpkey -algorithm Ed25519 -out /private.pem"
  );
  let pK = wasmFs.fs.readFileSync("/private.pem", { encoding: "utf8" });
  console.log(pK);
  document.body.innerText = pK;
})();