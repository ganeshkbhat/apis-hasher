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
const crypto = require('crypto');
const path = require("path");
const _filelock = require("../index.js");
const salt = "foobar";

describe('test-.mjs::hasher-apis: Test Suite for hasher-apis Files', function () {


    describe('test-.js::hasher-apis: [Test A] Test Suite for hasher-apis in main repo directory', function () {

        it('[Test A] Test for 1', function (done) {

            let { privateKey, publicKey, signature } = _filelock.createSign("This is a test", "sha256", "hex", "rsa", { modulusLength: 2048 }, {}, "createSign");

            let rsignverify1 = _filelock.createSignVerify("This is a test", signature, publicKey, "sha256", "hex", {}, "createSign");

            expect(rsignverify1).to.equal(true);
            done();
        });

        it('[Test A] Test for 2', function (done) {

            let { privateKey, publicKey, signature } = _filelock.createSign("This is a test");
            
            let rsignverify1 = _filelock.createSignVerify("This is a test", signature, publicKey);

            expect(rsignverify1).to.equal(true);
            done();
        });

    });


});


