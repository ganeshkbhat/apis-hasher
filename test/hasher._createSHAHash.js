/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher._createSHAHash.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const path = require("path");
const _filelock = require("../index.js");
const expect = require('chai').expect;

describe('test-.mjs::hasher-apis: Test Suite for hasher-apis Files', function () {

    describe('test-.js::hasher-apis: [Test A] Test Suite for hasher-apis in main repo directory', function () {
        
        it('[Test A] Test for creating hash using _createSHAHash', function (done) {
            let fileHash = _filelock._createSHAHash("filelock.json", "sha256", "base64");
            expect(fileHash).to.equal("hyBYClAC4C0Jw96vS3lQ+1yzw4wD4cUzQKWhgtBwgnc=");
            done();
        });

        it('[Test A] Test for creating hash using _createSHAHash with defaults', function (done) {
            let fileHash = _filelock._createSHAHash("filelocktext.json");
            expect("Qe2j8DSBCmrSFKAcBmU8HX/KGX8RO4HqUX/wv9SjMco=").to.equal(fileHash);
            done();
        });

    });


});

