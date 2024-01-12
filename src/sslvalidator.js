/**
 *
 * Package: hasher-apis
 * Author: Ganesh B
 * Description:
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: src/openssl.js
 * File Description:
 * More details: https://www.npmjs.com/package/openssl.js
 * 
*/

/* eslint no-console: 0 */

'use strict';

/**
 * 
 * 
 * // This module is a validator for SSL Certificates using the PEM node module.
 * 
 * // You can validate SSL Keys, SSL Certificates, SSL Certificate Domains, SSL Certificate Bundles, etc.
 * 
 * // API Documentation for Functions
 * 
 * validateSSL,
 * validateSSLCert,
 * validateSSLKey,
 * validateCertBundle,
 * validateCertKeyPair,
 * validateCertToDomain,
 * isValid 
 * 
 */
module.exports.sslvalidator = require('ssl-validator');

module.exports.default = {
  ...sslvalidator
}
