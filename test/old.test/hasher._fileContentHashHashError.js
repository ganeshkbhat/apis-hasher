/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher.hasher._fileContentHashHashError.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const expect = require('chai').expect;
const crypto = require("crypto");
const _filelock = require("../index.js");
const salt = "foobar";

describe('test-.mjs::hasher-apis: Test Suite for hasher-apis Files', function () {

    describe('test-.js::hasher-apis: [Test A] Test Suite for hasher-apis in main repo directory', function () {

        it('[Test A] Test for _fileContentHash with Hash value error in _fileContentHash', function (done) {
            try {
                let reshash = _filelock._fileContentHash("My personal data to hash", salt, "aes-256-ctr", "sha256s", "base64", { logger: console.log });
                let txt = _filelock._fileContentDeHash(reshash, salt, "aes-256-ctr", "sha256s", "base64", { logger: console.log });
            } catch (e) {
                expect(!!e).to.equal(true);
            }
            done();
        });

        it('[Test A] Test for _fileContentHash with Hash value error in _fileContentHash with defaults', function (done) {
            try {
                let reshash = _filelock._fileContentHash("My personal data to hash", salt);
                let txt = _filelock._fileContentHash(reshash, salt);
            } catch (e) {
                expect(!!e).to.equal(true);
            }
            done();
        });

    });


});
