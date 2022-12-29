/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher._verifySHAHash.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const expect = require('chai').expect;
const path = require("path");
const _filelock = require("../index.js");

describe('test-.mjs::hasher-apis: Test Suite for hasher-apis Files', function () {


    describe('test-.js::hasher-apis: [Test A] Test Suite for hasher-apis in main repo directory', function () {

        it('[Test A] Test for _createSHAHash and _verifySHAHash', function (done) {

            let fileHash = _filelock._createSHAHash("filelock.json", "sha256", "base64");
            let verifyHash = _filelock._verifySHAHash("filelock.json", fileHash, "sha256", "base64");

            expect(verifyHash).to.equal(true);
            done();
        });

        it('[Test A] Test for _createSHAHash and _verifySHAHash with defaults', function (done) {

            let fileHash = _filelock._createSHAHash("filelock.json");
            let verifyHash = _filelock._verifySHAHash("filelock.json", fileHash);

            expect(verifyHash).to.equal(true);
            done();
        });

    });


});
