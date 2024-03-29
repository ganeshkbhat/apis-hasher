/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const expect = require('chai').expect;

describe('test-.mjs::hasher-apis: Test Suite for hasher-apis Files', function () {

    describe('test-.js::hasher-apis: [Test A] Test Suite for hasher-apis in main repo directory', function () {

        it('[Test A] Test for all functions to be available', function (done) {
            let {
                createSHA, hashContent, dehashContent, hashFile, dehashFile,
                verifySHA, verifyFileContent, verifyHashedFile, verifyFile,
                encrypt, decrypt, createSign, createSignVerify,
                getCiphers, getHashes, getDiffieHellman, getFips, getRandomValues,
                genKeyPair, getConstants, getSymbolsList,
                encryptWithKey, decryptWithKey, dumpKeyFile,

                _createSHAHash, _fileContentHash, _fileContentDeHash,
                _fileHash, _fileDeHash, _fileHashFromContent, _fileDeHashLoadContent, _fileDeHashContent,
                _verifySHAHash, _verifyFileContentHash, _verifyHashedFile, _verifyFile,
                _encryptFile, _decryptFile, _createSign, _createSignVerify,
                _getCiphers, _getHashes, _getDiffieHellman, _getFips, _getRandomValues,
                _genKeyPair, _encryptWithKey, _decryptWithKey, _dumpKeyFile
            } = require("../index.js");


            expect(!!createSHA).to.equal(true);
            expect(!!hashContent).to.equal(true);
            expect(!!dehashContent).to.equal(true);
            expect(!!hashFile).to.equal(true)
            expect(!!dehashFile).to.equal(true)
            expect(!!verifySHA).to.equal(true)
            expect(!!verifyFileContent).to.equal(true)
            expect(!!verifyHashedFile).to.equal(true)
            expect(!!verifyFile).to.equal(true)
            expect(!!encrypt).to.equal(true)
            expect(!!decrypt).to.equal(true)
            expect(!!createSign).to.equal(true)

            expect(!!createSignVerify).to.equal(true)
            expect(!!getCiphers).to.equal(true)
            expect(!!getHashes).to.equal(true)
            expect(!!_createSHAHash).to.equal(true)

            expect(!!_fileContentHash).to.equal(true)
            expect(!!_fileContentDeHash).to.equal(true)
            expect(!!_fileHash).to.equal(true)
            expect(!!_fileDeHash).to.equal(true)

            expect(!!_verifySHAHash).to.equal(true)
            expect(!!_verifyFileContentHash).to.equal(true)
            expect(!!_verifyHashedFile).to.equal(true)
            expect(!!_verifyFile).to.equal(true)

            expect(!!_encryptFile).to.equal(true)
            expect(!!_decryptFile).to.equal(true)
            expect(!!_createSign).to.equal(true)
            expect(!!_createSignVerify).to.equal(true)

            expect(!!getDiffieHellman).to.equal(true)
            expect(!!getFips).to.equal(true)
            expect(!!getRandomValues).to.equal(true)
            expect(!!genKeyPair).to.equal(true)
            expect(!!getConstants).to.equal(true)
            expect(!!getSymbolsList).to.equal(true)
            expect(!!encryptWithKey).to.equal(true)
            expect(!!decryptWithKey).to.equal(true)
            expect(!!dumpKeyFile).to.equal(true)

            expect(!!_getDiffieHellman).to.equal(true)
            expect(!!_getFips).to.equal(true)
            expect(!!_getRandomValues).to.equal(true)
            expect(!!_genKeyPair).to.equal(true)
            expect(!!_encryptWithKey).to.equal(true)
            expect(!!_decryptWithKey).to.equal(true)
            expect(!!_dumpKeyFile).to.equal(true)

            expect(!!_fileHashFromContent).to.equal(true)
            expect(!!_fileDeHashLoadContent).to.equal(true)
            expect(!!_fileDeHashContent).to.equal(true)
            expect(!!_getCiphers).to.equal(true)
            expect(!!_getHashes).to.equal(true)

            done();
        });

    });


});




