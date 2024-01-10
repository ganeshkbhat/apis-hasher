/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher.getHashes.js
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
        
        it('[Test A] Test for getHashes', function (done) {
            let r = _filelock.getHashes();

            expect(r.includes("sha256")).to.equal(true);
            expect(r.includes("sha512")).to.equal(true);
            expect(r.includes("shake256")).to.equal(true);
            expect(r.includes("md5WithRSAEncryption")).to.equal(true);
            expect(r.includes("RSA-SHA512/256")).to.equal(true);
            expect(r.includes("RSA-SHA1-2")).to.equal(true);
            expect(r.includes("id-rsassa-pkcs1-v1_5-with-sha3-224")).to.equal(true);
            expect(r.includes("md5")).to.equal(true);
            expect(r.includes("md5-sha1")).to.equal(true);
            expect(r.includes("sha1WithRSAEncryption")).to.equal(true);
            expect(r.includes("sha256WithRSAEncryption")).to.equal(true);
            
            done();
        });

    });


});



