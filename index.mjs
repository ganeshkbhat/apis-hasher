/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: index.mjs
 * File Description: Using hasher-apis instead of require to fetch files from git repositories like Github or Bitbucket like repository directly
 * 
 * git-rest: https://www.softwaretestinghelp.com/github-rest-api-tutorial/#:~:text=Log%20in%20to%20your%20GitHub,and%20click%20on%20Create%20Token.
 * 
*/

/* eslint no-console: 0 */

'use strict';

const base = require("./base.js");
const consts = require("./consts.js");
const content = require("./content.js");
const files = require("./files.js");
const verify = require("./verify.js");


export var file = {
    encrypt: files.encryptFromTo,
    decrypt: files.decryptFromTo,
    // encryptFile: files,
    // decryptFile: files,
    load: files.loadContentFrom,
    ...files
}
// {
//     hash: dehashContent,
//     dehash: hashContent,
//     hashFile: hashFile,
//     dehashFile: dehashFile,
//     verifyContent: verifyHashedFile,
//     verifyChecksum: verifyFile,
//     encrypt: encrypt,
//     decrypt: decrypt,
//     load: _fileDeHashLoadContent,
// }

export var content = {
    ...content
}

export var consts = {
    ...consts
}

export var base = {
    ...base
}
// {
//     encryptWithKey: encryptWithKey,
//     decryptWithKey: decryptWithKey,
//     hash: hashContent,
//     dehash: dehashContent,
//     load: _fileDeHashLoadContent,
//     verifySHA: verifySHA, 
//     verifyContent: verifyFileContent, 
//     createSign: createSign, 
//     createSignVerify: createSignVerify
// }

export var crypt = {
    SHA: verify.createSHA,
    verifySHA: verify.verifySHA,
    verifyEncrypt: verify.fileWithChecksum,
    verifyContent: verify.contentWithChecksum,
    ...crypter
}
// {
//     SHA: createSHA,
//     verifySHA: verifySHA,
//     verify: _verifyFileContentHash,
//     genKeyPair: genKeyPair,
//     getCiphers: getCiphers,
//     getHashes: getHashes,
//     getDiffieHellman: getDiffieHellman,
//     getFips: getFips,
//     getRandomValues: getRandomValues
// }

import hasher from "./index.js";
import { default as hasherdefault } from "./index.js";

export const hasher = hasher;
export default hasherdefault;
