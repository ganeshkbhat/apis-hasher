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

import { default as hasher, createSHA, verifySHA, hashContent, dehashContent, verifyHashedFile, verifyFile, hashFile, dehashFile, encrypt, decrypt, _createSHAHash, _fileContentHash, _fileContentDeHash, _verifySHAHash, _verifyFileContentHash } from './index.js';
// process.env.NODE_OPTIONS = '--experimental-modules --loader ./custom-loader.mjs';

export default hasher;
export { createSHA, verifySHA, hashContent, dehashContent, verifyHashedFile, verifyFile, hashFile, dehashFile, encrypt, decrypt, _createSHAHash, _fileContentHash, _fileContentDeHash, _verifySHAHash, _verifyFileContentHash };
