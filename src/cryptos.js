

const fs = require('fs');
const path = require('path');
const { getConstants, getSymbolsList } = require("./const.js");



/**
 * getCiphers
 *
 * @return {*[]} 
 */
function getCiphers() {
    return require('crypto').getCiphers();
}


/**
 * getHashes
 *
 * @return {*[]} 
 */
function getHashes() {
    return require('crypto').getHashes();
}


/**
 * getDiffieHellman
 *
 * @param {*} groupName
 * @return {*[]} 
 */
function getDiffieHellman(groupName) {
    return require('crypto').getDiffieHellman(groupName);
}


/**
 * getFips
 *
 * @return {*[]} 
 */
function getFips() {
    return require('crypto').getFips();
}


/**
 * getRandomValues
 *
 * @param {*} typedArray
 * @return {*[]} 
 */
function getRandomValues(typedArray) {
    return require('crypto').getRandomValues(typedArray);
}




