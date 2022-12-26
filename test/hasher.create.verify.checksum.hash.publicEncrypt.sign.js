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
const salt = "foobar";
const crypto = require('crypto');

describe('test-.mjs::hasher-apis: Test Suite for hasher-apis Files', function () {

    describe('test-.js::hasher-apis: [Test A] Test Suite for hasher-apis in main repo directory', function () {
        
        it('[Test A] Test for ', function (done) {

            let { privateKey, publicKey, signature } = _filelock.createSign("This is a test", "sha256", "hex", "rsa", { modulusLength: 2048 }, {
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            }, "publicEncrypt");

            let rsignverify2 = _filelock.createSignVerify("This is a test", signature, publicKey, "sha256", "hex", {
                padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            }, "publicEncrypt");

            expect(rsignverify2).to.equal(true);
            done();
        });

    });


});



