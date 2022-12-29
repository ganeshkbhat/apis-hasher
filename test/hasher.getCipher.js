/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher.getCipher.js
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
        
        it('[Test A] Test for getCiphers', function (done) {
            
            let r = _filelock.getCiphers();
            expect(r.includes("aes-128-cbc")).to.equal(true);
            expect(r.includes("aes-128-cbc-hmac-sha256")).to.equal(true);
            expect(r.includes("aes-128-cfb1")).to.equal(true);
            expect(r.includes("aes-128-cfb8")).to.equal(true);
            expect(r.includes("aes-128-xts")).to.equal(true);
            expect(r.includes("aes-192-ocb")).to.equal(true);
            expect(r.includes("aes-256-cbc-hmac-sha256")).to.equal(true);
            expect(r.includes("aes-256-cbc-hmac-sha1")).to.equal(true);
            expect(r.includes("aes-256-xts")).to.equal(true);
            expect(r.includes("aes256")).to.equal(true);
            expect(r.includes("aria-256-cfb1")).to.equal(true);
            expect(r.includes("camellia-192-ecb")).to.equal(true);

            done();
        });

    });


});



