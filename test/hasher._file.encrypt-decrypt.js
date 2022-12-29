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

        it('[Test A] Test for encrypt', function (done) {
            let fileText = fs.readFileSync(p3, { encoding: "utf-8", flag: "r" });

            // Hash P3 File to P3
            let { privateKey, publicKey, encrypted } = _filelock.encrypt(p3, p3, "sha256", "rsa", "base64", { modulusLength: 2048 }, { modulusLength: 2048 });
            expect(fileText.toString("utf-8")).not.equal(encrypted);
            expect(fs.readFileSync(p3).toString("utf-8")).to.equal(encrypted);

            // DeHash P3 File hashed content to P3
            let r3 = _filelock.decrypt(p3, p3, privateKey, "sha256", "rsa", "base64", { modulusLength: 2048 });
            expect(r3.decrypted).to.equal(fileText);
            expect(fs.readFileSync(p3).toString("utf-8")).to.equal(fileText.toString("utf-8"));

            done();
        });

        it('[Test A] Test for encrypt with defaults', function (done) {
            let fileText = fs.readFileSync(p3);

            // Hash P3 File to P3
            let { privateKey, publicKey, encrypted } = _filelock.encrypt(p3, p3);
            expect(fileText).to.not.equal(encrypted);
            // expect(fs.readFileSync(p3).toString()).to.equal(encrypted);

            // DeHash P3 File hashed content to P3
            let r3 = _filelock.decrypt(p3, p3, privateKey);
            expect(r3.decrypted).to.equal(fileText.toString("utf-8"));
            // expect(fs.readFileSync(p3)).to.equal(fileText);

            done();
        });

    });

});
