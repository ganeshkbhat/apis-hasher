/**
 *
 * Package: hasher-apis
 * Author: Ganesh B
 * Description:
 * Install: npm i hasher-apis --save
 * Github: https://github.com/ganeshkbhat/apis-hasher
 * npmjs Link: https://www.npmjs.com/package/hasher-apis
 * File: src/const.js
 * File Description:
 *
*/

/* eslint no-console: 0 */

'use strict'

const crypto = require('crypto')

/**
 * isBrowser
 *
 * @return {*} 
 */
function isBrowser() {
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }
  if (typeof importScripts === "function") { return false; }
  if (typeof window === "object") { return true; }
}

/**
 * List of constants in crypto
 *
 * @param {*} constantname
 * @return {*}
 */
function getConstants (constantname) {
  let constanttype

  switch (constantname) {
    case 'OPENSSL_VERSION_NUMBER':
      constanttype = crypto.constants.OPENSSL_VERSION_NUMBER
      break
    case 'SSL_OP_ALL':
      constanttype = crypto.constants.SSL_OP_ALL
      break
    case 'SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION':
      constanttype = crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION
      break
    case 'SSL_OP_CIPHER_SERVER_PREFERENCE':
      constanttype = crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE
      break
    case 'SSL_OP_CISCO_ANYCONNECT':
      constanttype = crypto.constants.SSL_OP_CISCO_ANYCONNECT
      break
    case 'SSL_OP_COOKIE_EXCHANGE':
      constanttype = crypto.constants.SSL_OP_COOKIE_EXCHANGE
      break
    case 'SSL_OP_CRYPTOPRO_TLSEXT_BUG':
      constanttype = crypto.constants.SSL_OP_CRYPTOPRO_TLSEXT_BUG
      break
    case 'SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS':
      constanttype = crypto.constants.SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS
      break
    case 'SSL_OP_EPHEMERAL_RSA':
      constanttype = crypto.constants.SSL_OP_EPHEMERAL_RSA
      break
    case 'SSL_OP_LEGACY_SERVER_CONNECT':
      constanttype = crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT
      break
    case 'SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER':
      constanttype = crypto.constants.SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER
      break
    case 'SSL_OP_MICROSOFT_SESS_ID_BUG':
      constanttype = crypto.constants.SSL_OP_MICROSOFT_SESS_ID_BUG
      break
    case 'SSL_OP_MSIE_SSLV2_RSA_PADDING':
      constanttype = crypto.constants.SSL_OP_MSIE_SSLV2_RSA_PADDING
      break
    case 'SSL_OP_NETSCAPE_CA_DN_BUG':
      constanttype = crypto.constants.SSL_OP_NETSCAPE_CA_DN_BUG
      break
    case 'SSL_OP_NETSCAPE_CHALLENGE_BUG':
      constanttype = crypto.constants.SSL_OP_NETSCAPE_CHALLENGE_BUG
      break
    case 'SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG':
      constanttype = crypto.constants.SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG
      break
    case 'SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG':
      constanttype = crypto.constants.SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG
      break
    case 'SSL_OP_NO_COMPRESSION':
      constanttype = crypto.constants.SSL_OP_NO_COMPRESSION
      break
    case 'SSL_OP_NO_QUERY_MTU':
      constanttype = crypto.constants.SSL_OP_NO_QUERY_MTU
      break
    case 'SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION':
      constanttype = crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION
      break
    case 'SSL_OP_NO_SSLv2':
      constanttype = crypto.constants.SSL_OP_NO_SSLv2
      break
    case 'SSL_OP_NO_SSLv3':
      constanttype = crypto.constants.SSL_OP_NO_SSLv3
      break
    case 'SSL_OP_NO_TICKET':
      constanttype = crypto.constants.SSL_OP_NO_TICKET
      break
    case 'SSL_OP_NO_TLSv1':
      constanttype = crypto.constants.SSL_OP_NO_TLSv1
      break
    case 'SSL_OP_NO_TLSv1_1':
      constanttype = crypto.constants.SSL_OP_NO_TLSv1_1
      break
    case 'SSL_OP_NO_TLSv1_2':
      constanttype = crypto.constants.SSL_OP_NO_TLSv1_2
      break
    case 'SSL_OP_PKCS1_CHECK_1':
      constanttype = crypto.constants.SSL_OP_PKCS1_CHECK_1
      break
    case 'SSL_OP_PKCS1_CHECK_2':
      constanttype = crypto.constants.SSL_OP_PKCS1_CHECK_2
      break
    case 'SSL_OP_SINGLE_DH_USE':
      constanttype = crypto.constants.SSL_OP_SINGLE_DH_USE
      break
    case 'SSL_OP_SINGLE_ECDH_USE':
      constanttype = crypto.constants.SSL_OP_SINGLE_ECDH_USE
      break
    case 'SSL_OP_SSLEAY_080_CLIENT_DH_BUG':
      constanttype = crypto.constants.SSL_OP_SSLEAY_080_CLIENT_DH_BUG
      break
    case 'SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG':
      constanttype = crypto.constants.SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG
      break
    case 'SSL_OP_TLS_BLOCK_PADDING_BUG':
      constanttype = crypto.constants.SSL_OP_TLS_BLOCK_PADDING_BUG
      break
    case 'SSL_OP_TLS_D5_BUG':
      constanttype = crypto.constants.SSL_OP_TLS_D5_BUG
      break
    case 'SSL_OP_TLS_ROLLBACK_BUG':
      constanttype = crypto.constants.SSL_OP_TLS_ROLLBACK_BUG
      break
    case 'ENGINE_METHOD_RSA':
      constanttype = crypto.constants.ENGINE_METHOD_RSA
      break
    case 'ENGINE_METHOD_DSA':
      constanttype = crypto.constants.ENGINE_METHOD_DSA
      break
    case 'ENGINE_METHOD_DH':
      constanttype = crypto.constants.ENGINE_METHOD_DH
      break
    case 'ENGINE_METHOD_RAND':
      constanttype = crypto.constants.ENGINE_METHOD_RAND
      break
    case 'ENGINE_METHOD_EC':
      constanttype = crypto.constants.ENGINE_METHOD_EC
      break
    case 'ENGINE_METHOD_CIPHERS':
      constanttype = crypto.constants.ENGINE_METHOD_CIPHERS
      break
    case 'ENGINE_METHOD_DIGESTS':
      constanttype = crypto.constants.ENGINE_METHOD_DIGESTS
      break
    case 'ENGINE_METHOD_PKEY_METHS':
      constanttype = crypto.constants.ENGINE_METHOD_PKEY_METHS
      break
    case 'ENGINE_METHOD_PKEY_ASN1_METHS':
      constanttype = crypto.constants.ENGINE_METHOD_PKEY_ASN1_METHS
      break
    case 'ENGINE_METHOD_ALL':
      constanttype = crypto.constants.ENGINE_METHOD_ALL
      break
    case 'ENGINE_METHOD_NONE':
      constanttype = crypto.constants.ENGINE_METHOD_NONE
      break
    case 'DH_CHECK_P_NOT_SAFE_PRIME':
      constanttype = crypto.constants.DH_CHECK_P_NOT_SAFE_PRIME
      break
    case 'DH_CHECK_P_NOT_PRIME':
      constanttype = crypto.constants.DH_CHECK_P_NOT_PRIME
      break
    case 'DH_UNABLE_TO_CHECK_GENERATOR':
      constanttype = crypto.constants.DH_UNABLE_TO_CHECK_GENERATOR
      break
    case 'DH_NOT_SUITABLE_GENERATOR':
      constanttype = crypto.constants.DH_NOT_SUITABLE_GENERATOR
      break
    case 'ALPN_ENABLED':
      constanttype = crypto.constants.ALPN_ENABLED
      break
    case 'RSA_PKCS1_PADDING':
      constanttype = crypto.constants.RSA_PKCS1_PADDING
      break
    case 'RSA_SSLV23_PADDING':
      constanttype = crypto.constants.RSA_SSLV23_PADDING
      break
    case 'RSA_NO_PADDING':
      constanttype = crypto.constants.RSA_NO_PADDING
      break
    case 'RSA_X931_PADDING':
      constanttype = crypto.constants.RSA_X931_PADDING
      break
    case 'RSA_PSS_SALTLEN_DIGEST':
      constanttype = crypto.constants.RSA_PSS_SALTLEN_DIGEST
      break
    case 'RSA_PSS_SALTLEN_MAX_SIGN':
      constanttype = crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN
      break
    case 'RSA_PSS_SALTLEN_AUTO':
      constanttype = crypto.constants.RSA_PSS_SALTLEN_AUTO
      break
    case 'POINT_CONVERSION_COMPRESSED':
      constanttype = crypto.constants.POINT_CONVERSION_COMPRESSED
      break
    case 'POINT_CONVERSION_UNCOMPRESSED':
      constanttype = crypto.constants.POINT_CONVERSION_UNCOMPRESSED
      break
    case 'POINT_CONVERSION_HYBRID':
      constanttype = crypto.constants.POINT_CONVERSION_HYBRID
      break
    case 'defaultCoreCipherList':
      constanttype = crypto.constants.defaultCoreCipherList
      break
    case 'defaultCipherList':
      constanttype = crypto.constants.defaultCipherList
      break
    default:
      break
  }
  return constanttype
}

/**
 * List of symbols like
 *      digest, base, keyGens, hashes, ciphers,
 *      sha, rsa, ssl, aria, des, rsassl,
 *      camella, id, sm4, shake, md5, pkcs, aes
 *
 * @param {*} listname
 * @return {*}
 */
function getSymbolsList (listname) {
  let list
  switch (listname) {
    case 'keyGen':
      list = ['rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', 'dh']
      break
    case 'digest':
      list = ['ascii', 'utf8', 'utf-8', 'utf16le', 'ucs2', 'ucs-2', 'base64', 'base64url', 'latin1', 'binary', 'hex']
      break
    case 'encryptType':
      list = ['createSign', 'publicEncrypt']
      break
    case 'hashes':
      list = crypto.getHashes()
      break
    case 'ciphers':
      list = crypto.getCiphers()
      break
    case 'keyAlgorithm':
      list = crypto.getCiphers()
      break
    case 'algorithm':
      list = crypto.getHashes()
      break
    case 'rsa':
      list = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('rsa')) return i })
      break
    case 'sha':
      list = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('sha')) return i })
      break
    case 'md5':
      list = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('md5')) return i })
      break
    case 'shake':
      list = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('shake')) return i })
      break
    case 'sm':
      list = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('sm')) return i })
    case 'ssl':
      list = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('ssl')) return i })
      break
    case 'rsassl':
      list = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('rsassl')) return i })
      break
    case 'pkcs':
      list = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('pkcs')) return i })
      break
    case 'aes':
      list = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('aes')) return i })
      break
    case 'camellia':
      list = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('camellia')) return i })
      break
    case 'aria':
      list = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('aria')) return i })
      break
    case 'des':
      list = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('des')) return i })
      break
    case 'id':
      list = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('id')) return i })
      break
    case 'sm4':
      list = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('sm4')) return i })
      break
    default:
      list = [...crypto.getCiphers(), crypto.getHashes()].filter((i) => { if (i.toLowerCase().includes(listname)) return i })
      break
  }
  return list
}

/**
 * getSymbols
 *
 * @param {*} symbolname
 * @return {*}
 */
function getSymbols (symbolname) {
  let symbols
  switch (symbolname) {
    case 'keyGen':
      symbols = { rsa: 'rsa', 'rsa-pss': 'rsa-pss', dsa: 'dsa', ec: 'ec', ed25519: 'ed25519', ed448: 'ed448', x25519: 'x25519', x448: 'x448', dh: 'dh' }
      break
    case 'digest':
      symbols = { ascii: 'ascii', utf8: 'utf8', 'utf-8': 'utf-8', utf16le: 'utf16le', ucs2: 'ucs2', 'ucs-2': 'ucs-2', base64: 'base64', base64url: 'base64url', latin1: 'latin1', binary: 'binary', hex: 'hex' }
      break
    case 'encryptType':
      symbols = { createSign: 'createSign', publicEncrypt: 'publicEncrypt' }
      break
    case 'hashes':
      symbols = crypto.getHashes()
      break
    case 'ciphers':
      symbols = crypto.getCiphers()
      break
    case 'keyAlgorithm':
      symbols = crypto.getCiphers()
      break
    case 'algorithm':
      symbols = crypto.getHashes()
      break
    case 'rsa':
      symbols = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('rsa')) return [i, i] })
      break
    case 'sha':
      symbols = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('sha')) return [i, i] })
      break
    case 'md5':
      symbols = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('md5')) return [i, i] })
      break
    case 'shake':
      symbols = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('shake')) return [i, i] })
      break
    case 'sm':
      symbols = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('sm')) return [i, i] })
    case 'ssl':
      symbols = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('ssl')) return [i, i] })
      break
    case 'rsassl':
      symbols = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('rsassl')) return [i, i] })
      break
    case 'pkcs':
      symbols = crypto.getCiphers().filter((i) => { if (i.toLowerCase().includes('pkcs')) return [i, i] })
      break
    case 'aes':
      symbols = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('aes')) return [i, i] })
      break
    case 'camellia':
      symbols = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('camellia')) return [i, i] })
      break
    case 'aria':
      symbols = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('aria')) return [i, i] })
      break
    case 'des':
      symbols = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('des')) return [i, i] })
      break
    case 'id':
      symbols = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('id')) return [i, i] })
      break
    case 'sm4':
      symbols = crypto.getHashes().filter((i) => { if (i.toLowerCase().includes('sm4')) return [i, i] }).map((i) => { return { [i[0]]: i[1] } })
      break
    default:
      symbols = [...crypto.getCiphers(), crypto.getHashes()].filter((i) => { if (i.toLowerCase().includes(symbolname)) return [i, i] })
      break
  }
  return symbols
}

/**
 * getCiphers
 *
 * @param {*} ciphername
 * @return {*[] | boolean}
 */
function getCiphers (ciphername) {
  if (!!ciphername && require('crypto').getCiphers().map(v => v.toLowerCase()).includes(ciphername)) return true
  return require('crypto').getCiphers()
}

/**
 * getHashes
 *
 * @param {*} hashesname
 * @return {*[] | boolean}
 */
function getHashes (hashesname) {
  if (!!hashesname && require('crypto').getHashes().map(v => v.toLowerCase()).includes(hashesname.toLowerCase())) return true
  return require('crypto').getHashes()
}

/**
 * getDiffieHellman
 *
 * @param {*} groupname
 * @return {*[] | boolean}
 */
function getDiffieHellman (groupname) {
  if (!!groupname && require('crypto').getHashes().map(v => v.toLowerCase()).includes(groupname.toLowerCase())) return true
  return require('crypto').getDiffieHellman(groupname)
}

/**
 * getFips
 *
 * @return {*[] | boolean}
 */
function getFips (fipsname) {
  if (!!fipsname && require('crypto').getHashes().map(v => v.toLowerCase()).includes(fipsname.toLowerCase())) return true
  return require('crypto').getFips()
}

/**
 * getRandomValues
 *
 * @param {*} typedArray
 * @return {*[]}
 */
function getRandomValues (typedArray) {
  return require('crypto').getRandomValues(typedArray)
}

module.exports.default = {
  getConstants,
  getSymbolsList,
  getSymbols,
  getCiphers,
  getHashes,
  getHashes,
  getDiffieHellman,
  getFips,
  getRandomValues
}

module.exports.getConstants = getConstants
module.exports.getSymbolsList = getSymbolsList
module.exports.getSymbols = getSymbols
module.exports.getCiphers = getCiphers
module.exports.getHashes = getHashes
module.exports.getDiffieHellman = getDiffieHellman
module.exports.getFips = getFips
module.exports.getRandomValues = getRandomValues
