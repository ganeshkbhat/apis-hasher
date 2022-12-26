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
const fs = require("fs");
const _filelock = require("../index.js");
const salt = "foobar";

const path = require("path");

const p1 = path.join(__dirname, "./programming.base.txt");
const p2 = path.join(__dirname, "./programming.hashed.txt");
const p3 = path.join(__dirname, "./programming.hash.rehash.txt");

describe('test-.mjs::hasher-apis: Test Suite for hasher-apis Files', function () {

    describe('test-.js::hasher-apis: [Test A] Test Suite for hasher-apis in main repo directory', function () {

        it('[Test A] Test for 1', function (done) {
            let txt = fs.readFileSync(p1).toString("utf-8");

            // Hash P1 File to P2
            let h2 = _filelock.hashFile(p1, p2, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
            let h3r = fs.readFileSync(p2).toString("utf-8");
            expect(JSON.stringify(h2)).to.equal(h3r.toString("utf-8"));

            // DeHash P3 File hashed content to P1
            let r1 = _filelock.dehashFile(p2, p2, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
            let txttrnsfr = fs.readFileSync(p2).toString("utf-8");
            
            expect(txt).to.equal(txttrnsfr);
            expect(txt).to.equal(r1);
            done();
        });

        it('[Test A] Test for 2', function (done) {
            let txt = fs.readFileSync(p3).toString("utf-8");

            // Hash P1 File to P3
            let h2 = _filelock.hashFile(p1, p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
            let h3r = fs.readFileSync(p3);
            expect(h2.iv).to.equal(JSON.parse(h3r).iv);
            expect(h2.content).to.equal(JSON.parse(h3r).content);

            // DeHash P3 File hashed content to P1
            let r1 = _filelock.dehashFile(p3, p3, salt, "aes-256-ctr", "sha256", "base64", { logger: console.log });
            let txttrnsfr = fs.readFileSync(p3).toString("utf-8");

            expect(txt).to.equal(txttrnsfr);
            expect(txt).to.equal(r1);
            done();
        });

        it('[Test A] Test for 3', function (done) {
            let txt = fs.readFileSync(p1).toString("utf-8");

            // Hash P1 File to P2
            let h2 = _filelock.hashFile(p1, p2, salt);
            let h3r = fs.readFileSync(p2).toString("utf-8");
            expect(h2.iv).to.equal(JSON.parse(h3r).iv);
            expect(h2.content).to.equal(JSON.parse(h3r).content);

            // DeHash P2 File hashed content to P2
            let r1 = _filelock.dehashFile(p2, p2, salt);
            let txttrnsfr = fs.readFileSync(p2).toString("utf-8");

            expect(txt).to.equal(txttrnsfr);
            expect(txt).to.equal(r1);
            done();
        });

        it('[Test A] Test for 4', function (done) {
            let txt = fs.readFileSync(p1).toString("utf-8");

            // Hash P1 File to P3
            let h2 = _filelock.hashFile(p1, p3, salt);
            let h3r = fs.readFileSync(p3).toString("utf-8");
            expect(h2.iv).to.equal(JSON.parse(h3r).iv);
            expect(h2.content).to.equal(JSON.parse(h3r).content);

            // DeHash P3 File hashed content to P1
            let r1 = _filelock.dehashFile(p3, p3, salt);
            let txttrnsfr = fs.readFileSync(p3).toString("utf-8");

            expect(txt).to.equal(txttrnsfr);
            expect(txt).to.equal(r1);
            done();
        });

        it('[Test A] Test for 5', function (done) {
            let txt = fs.readFileSync(p1).toString("utf-8");

            // Hash P1 File to P3
            let h2 = _filelock.hashFile(p1, p2, salt);
            let h3r = fs.readFileSync(p2).toString("utf-8");
            expect(h2.iv).to.equal(JSON.parse(h3r).iv);
            expect(h2.content).to.equal(JSON.parse(h3r).content);

            done();
        });


    });

});
