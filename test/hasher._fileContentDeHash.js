/**
 * 
 * Package: hasher-apis
 * Author: Ganesh B
 * Description: 
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: demos/hasher._fileContentDeHash.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const expect = require('chai').expect;
const _filelock = require("../index.js");
const salt = "foobar";

describe('test-.mjs::hasher-apis: Test Suite for hasher-apis Files', function () {


    describe('test-.js::hasher-apis: [Test A] Test Suite for hasher-apis in main repo directory', function () {
        
        it('[Test A] Test for ', function (done) {

            let dehash = _filelock._fileContentDeHash({
                iv: 'eEahOe0F0Rujig/yBTHFWQ==',
                content: '6pRvpFZZutKXhavJVItvOk+8DeHETwPD'
            }, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });

            expect("My personal data to hash").to.equal(dehash);
            done();
        });

        it('[Test A] Test for ', function (done) {
            let hash = _filelock._fileContentHash("My personal data to hash", salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });

            let dehash = _filelock._fileContentDeHash(hash, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });

            expect("My personal data to hash").to.equal(dehash);
            done();
        });

    });

});

