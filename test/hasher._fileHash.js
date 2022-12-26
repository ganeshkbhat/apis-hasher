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

const expect = require('chai').expect;
const fs = require("fs");
const _filelock = require("../index.js");
const salt = "foobar";

const path = require("path");

const p1 = path.join(__dirname, "./programming.base.txt");
const p2 = path.join(__dirname, "./programming.hashed.txt");
const p3 = path.join(__dirname, "./programming.hash.rehash.txt");

describe('test-.mjs::hasher-apis: Test Suite for hasher-apis Files', function () {


    describe('test-.js::hasher-apis: [Test A] Test Suite for hasher-apis in main repo directory', function () {

        it('[Test A] Test for ', function (done) {
            let txt = fs.readFileSync(p3).toString("utf-8");

            // Hash P3 File to P3
            let h3 = _filelock.hashFile(p3, p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
            let h3r = fs.readFileSync(p3).toString("utf-8");
            expect(h3.content).to.equal(JSON.parse(h3r).content);
            expect(h3.iv).to.equal(JSON.parse(h3r).iv);

            // DeHash P3 File hashed content to P3
            let r3 = _filelock.dehashFile(p3, p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
            let txttrnsfr = fs.readFileSync(p3).toString("utf-8");

            expect(txt).to.equal(txttrnsfr);
            expect(txt).to.equal(r3);
            expect(txttrnsfr).to.equal(r3);
            done();
        });

        it('[Test A] Test for ', function (done) {
            let txt = fs.readFileSync(p3).toString("utf-8");

            // // Hash P3 File to P3
            let h3 = _filelock.hashFile(p3, p3, salt);
            let h3r = fs.readFileSync(p3).toString("utf-8");
            expect(h3.content).to.equal(JSON.parse(h3r).content);
            expect(h3.iv).to.equal(JSON.parse(h3r).iv);

            // // DeHash P3 File hashed content to P3
            let r3 = _filelock.dehashFile(p3, p3, salt);
            let txttrnsfr = fs.readFileSync(p3).toString("utf-8");

            expect(txt).to.equal(txttrnsfr);
            expect(txt).to.equal(r3);
            expect(txttrnsfr).to.equal(r3);
            done();
        })

    });


});
