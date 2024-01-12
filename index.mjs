/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: index.mjs
 * File Description: 
 * 
 * git-rest: https://www.softwaretestinghelp.com/github-rest-api-tutorial/#:~:text=Log%20in%20to%20your%20GitHub,and%20click%20on%20Create%20Token.
 * 
*/

/* eslint no-console: 0 */

'use strict';


import base from "./src/base.js";
import consts from "./src/consts.js";
import content from "./src/content.js";
import files from "./src/files.js";
import verify from "./src/verify.js";
import openssl  from "./src/openssl.js";
import sslvalidator from "./src/sslvalidator.js";


// const base = require("./src/base.js");
// const consts = require("./src/consts.js");
// const content = require("./src/content.js");
// const files = require("./src/files.js");
// const verify = require("./src/verify.js");
// const openssl = require("./src/openssl.js");
// const sslvalidator = require("./src/sslvalidator.js");

import hasher from "./index.js";
export default hasher.default;

delete hasher.default;
export const hasherapis = {
    ...hasher
};

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

export var openssl = openssl;
export var sslvalidator = sslvalidator;
