# hasher-apis

Simpler flexible implementation Crypto Module functions to hash/ encrypt/ decrypt content and get SHA or other algorithm hashes of text or any data

Find the demos in the [demos folder](./demos)

# APIs hasher

You can find details about used crypto algorithm details in the [nodejs crypto, cipher, decipher, diffiehellman, hmac, hash, and other docs here](https://nodejs.org/api/crypto.html)


### Commonjs Code

```

var hasher = require("hasher-apis");
hasher._createSHAHash(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })
hasher.createSHA(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })

```

### ESM Code

```

import { default as _createSHAHash, createSHA } as "hasher-apis";
_createSHAHash(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })
createSHA(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })

```

### ESM or Commonjs Code

```

var hasher = import("hasher-apis");
hasher._createSHAHash(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })
hasher.createSHA(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })

```


### hasher-apis APIS Methods


* ##### Data or Content Based Methods
    - [hashContent](#hashcontent), 
    - [dehashContent](#dehashcontent), 
    - [encryptWithKey](#encryptwithkey), 
    - [decryptWithKey](#decryptwithkey)
* ##### File Based Methods
    - [hash](#hashfile), 
    - [dehash](#dehashfile), 
    - [verifyContent](#verifyhashedfile), 
    - [verifyChecksum](#verifyfile), 
    - [encrypt](#encrypt), 
    - [decrypt](#decrypt), 
    - [createSign](#createsign), 
    - [createSignVerify](#createsignverify)
* ##### Keys or Hash or Other Based Methods
    - [createSHA](#createsha), 
    - [verifySHA](#verifysha), 
    - [verifyContent](#verifyfilecontent), 
    - [getCiphers](#getciphers), 
    - [getHashes](#gethashes), 
    - [getDiffieHellman](#getdiffiehellman), 
    - [getFips](#getfips), 
    - [getRandomValues](#getrandomvalues), 
    - [getConstants](#getconstants), 
    - [getSymbolsList](#getsymbolslist), 
    - [genKeyPair](#genkeypair), 
    - [dumpKeyFile](#dumpkeyfile)


### hasher-apis APIS Methods



### Data or Content Based Methods



##### <a name="hashcontent"></a> `hashContent`

Create an encrytion using a content using salt and algorithms

Usage: `hashContent(data, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `hashContent(data, salt)`

Usage: `content.hash(data, salt)`


```
/**
 *
 * @param {*} data
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"]
 *      [default: "aes-256-ctr"]
 *      [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { logger: console.log }]
 *      [options: logger function]
 * @return {*}
 *
 */
```

##### <a name="dehashcontent"></a> `dehashContent`

Create an decryption of encrypted data using salt and algorithms

Usage: `dehashContent(hashdata, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `dehashContent(hashdata, salt)`

Usage: `content.dehash(hashdata, salt)`


```
/**
 *
 * @param {*} hashdata
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"]
 *      [default: "aes-256-ctr"]
 *      [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { logger: console.log }]
 *      [options: logger function]
 * @return {*}
 *
 */
```

##### <a name="encryptwithkey"></a> `encryptWithKey`



Usage: `encryptWithKey(data, options)`

Usage: `content.encryptWithKey(data, options)`

Usage: `content.encryptWithKey(data, options)`


```
/**
 * encryptWithKey
 *
 * @param {*} [options] < { [publicKey | publicKeyPath], padding, algorithm ) } >
 * @return {*} 
 */
```

##### <a name="decryptwithkey"></a> `decryptWithKey`



Usage: `decryptWithKey(hashdata, options)`

Usage: `content.decryptWithKey(hashdata, options)`

Usage: `content.decryptWithKey(hashdata, options)`


```
/**
 *
 *
 * @param {*} hashdata
 * @param {*} [options] < { [privateKey | privateKeyPath], padding, algorithm ) } >
 * @return {*} 
 */
```


### File Based Methods


##### <a name="hashfile"></a> `hashFile`

Create an encrytion of a file using salt and algorithms

Usage: `hashFile(remotePath, remoteDestPath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `hashFile(remotePath, remoteDestPath, salt)`

Usage: `file.hash(remotePath, remoteDestPath, salt)`


```
/**
 *
 * @param {*} remotePath
 * @param {*} remoteDestPath
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"]
 *      [default: "aes-256-ctr"]
 *      [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { logger: console.log }]
 *      [options: logger function]
 * @return {*}
 *
 */
```

##### <a name="dehashfile"></a> `dehashFile`

Create an decryption of encrypted file using salt and algorithms

Usage: `dehashFile(remotePath, remoteDestPath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `dehashFile(remotePath, remoteDestPath, salt)`

Usage: `file.dehash(remotePath, remoteDestPath, salt)`


```
/**
 *
 * @param {*} remotePath
 * @param {*} remoteDestPath
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"]
 *      [default: "aes-256-ctr"]
 *      [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { logger: console.log }]
 *      [options: logger function]
 * @return {*}
 *
 */
```

##### <a name="filehashfromcontent"></a> `fileHashFromContent`

Create an encrytion of a file using salt and algorithms

Usage: `fileHashFromContent(remotePath, content, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `fileHashFromContent(remotePath, content, salt)`

Usage: `file.hash(remotePath, content, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `file.hash(remotePath, content, salt)`


```
/**
 * fileHashFromContent
 * file uses _fileContentHash function
 *
 * @param {*} remoteDestPath
 * @param {*} data
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*}
 */
```

##### <a name="filedehashcontent"></a> `fileDeHashContent`

Create an encrytion of a file using salt and algorithms

Usage: `fileDeHashContent(remoteDestPath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `fileDeHashContent(remoteDestPath, salt)`

Usage: `file.dehash(remotePath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `file.dehash(remotePath, salt)`


```

/**
 * fileDeHashContent
 * file uses _fileContentDeHash
 *
 * @param {*} remoteDestPath
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"] [default: "aes-256-ctr"] [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*}
 */
```

##### <a name="filedehashloadcontent"></a> `fileDeHashLoadContent`

Create an encrytion of a file using salt and algorithms

Usage: `fileDeHashLoadContent(remoteDestPath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `fileDeHashLoadContent(remoteDestPath, salt)`

Usage: `content.dehashLoad(remotePath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `content.dehashLoad(remotePath, salt)`

Usage: `file.load(remotePath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `file.load(remotePath, salt)`

```

/**
 * fileDeHashLoadContent
 * file uses _fileContentDeHash
 *
 * @param {*} remoteDestPath
 * @param {*} salt
 * @param {string} [algorithm="aes-256-ctr"]
 * @param {string} [keyAlgorithm="sha256"]
 * @param {string} [digest="base64"]
 * @param {*} [options={ logger: console.log }]
 * @return {*}
 */
```


##### <a name="verifyfilecontent"></a> `verifyFileContent`

Verify a content data using hash provided

Usage: `verifyFileContent(data, hashToCheck, algorithm, digest, options)`

Usage: `verifyFileContent(data, hashToCheck)`

Usage: `content.verifyContent(data, hashToCheck, algorithm, digest, options)`

Usage: `content.verifyContent(data, hashToCheck)`


```
/**
 *
 * @param {*} data
 * @param {*} hashToCheck
 * @param {string} [algorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { logger: console.log }]
 *      [options: logger function]
 * @return {*}
 *
 */
```

##### <a name="verifyhashedfile"></a> `verifyHashedFile`

Verify a file data using hash provided

Usage: `verifyHashedFile(remotePath, hashToCheck, algorithm, digest, options)`

Usage: `verifyHashedFile(remotePath, hashToCheck)`

Usage: `file.verifyContent(remotePath, hashToCheck, algorithm, digest, options)`

Usage: `file.verifyContent(remotePath, hashToCheck)`


```
/**
 *
 * @param {*} remotePath
 * @param {*} hashToCheck
 * @param {string} [algorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { logger: console.log }]
 *      [options: logger function]
 * @return {*}
 *
 */
```

##### <a name="verifyfile"></a> `verifyFile`

Verify a file data using checksum provided - market standards

Usage: `verifyFile(remotePath, checksum, algorithm, digest, options)`

Usage: `verifyFile(remotePath, checksum)`

Usage: `file.verifyChecksum(remotePath, checksum, algorithm, digest, options)`

Usage: `file.verifyChecksum(remotePath, checksum)`


```
/**
 *
 * @param {*} remotePath
 * @param {*} checksum
 * @param {string} [algorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { logger: console.log }]
 *      [options: logger function]
 * @return {*}
 *
 */
```

##### <a name="encrypt"></a> `encrypt`

Encrypt a file

Usage: `encrypt(remotePath, remoteDestPath, algorithm, keyAlgorithm, digest, keyOptions, options)`

Usage: `encrypt(remotePath, remoteDestPath)`

Usage: `file.encrypt(remotePath, remoteDestPath, algorithm, keyAlgorithm, digest, keyOptions, options)`

Usage: `file.encrypt(remotePath, remoteDestPath)`


```
/**
 *
 *
 * @param {*} remotePath
 * @param {*} remoteDestPath
 * @param {string} [algorithm="aes-256-ctr"]
 *      [default: "aes-256-ctr"]
 *      [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { modulusLength: 2048 }]
 * @return {*} Returns Object: { publicKey, privateKey, encrypted }
 *
 */
```

##### <a name="decrypt"></a> `decrypt`

Decrypt a file

Usage: `decrypt(remotePath, remoteDestPath, privateKey, algorithm, keyAlgorithm, digest, options)`

Usage: `decrypt(remotePath, remoteDestPath, privateKey)`

Usage: `file.decrypt(remotePath, remoteDestPath, privateKey, algorithm, keyAlgorithm, digest, options)`

Usage: `file.decrypt(remotePath, remoteDestPath, privateKey)`


```
/**
 *
 * @param {*} remotePath
 * @param {*} remoteDestPath
 * @param {*} privateKey
 * @param {string} [algorithm="aes-256-ctr"]
 *      [default: "aes-256-ctr"]
 *      [options: use function getCiphers]
 * @param {string} [keyAlgorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { modulusLength: 2048 }]
 * @return {*}
 * @param {*}
 *      [options={ modulusLength: 2048 }]
 * @return {*} Returns Object: { decrypted }
 *
 */
```

##### <a name="createsign"></a> `createSign`

Sign a Data

Usage: `createSign(data, algorithm, base, keyGenType, keyOptions, options, encryptType)`

Usage: `createSign(data)`

Usage: `content.createSign(data, algorithm, base, keyGenType, keyOptions, options, encryptType)`

Usage: `content.createSign(data)`


```
/**
 *
 * @param {*} data
 * @param {*} algorithm
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {*} base
 *      [default: "hex"]
 *      [options: ]
 * @param {*} keyGenType
 *      [default: "rsa"]
 *      [options: 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh']
 * @param {*} keyOptions
 *      [default: For createSign & publicEncrypt: { modulusLength: 2048 }]
 * @param {*} options
 *      [default: For createSign: { modulusLength: 2048 }, For publicEncrypt: { padding: crypto.constants.RSA_PKCS1_PSS_PADDING}]
 * @param {*} encryptType
 *      [default: "createSign"]
 *      [options: createSign, publicEncrypt]
 * @return {*} Returns Object: { publicKey, privateKey, signature }
 *
 */
```

##### <a name="createsignverify"></a> `createSignVerify`

Verify a Signed Data

Usage: `createSignVerify(data, signature, publicKey, algorithm, base, options, encryptType)`

Usage: `createSignVerify(data, signature, publicKey)`

Usage: `content.createSignVerify(data, signature, publicKey, algorithm, base, options, encryptType)`

Usage: `content.createSignVerify(data, signature, publicKey)`


```
/**
 *
 * @param {*} data
 * @param {*} signature
 * @param {*} publicKey
 * @param {*} algorithm
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {*} base
 *      [default: "hex"]
 *      [options: ]
 * @param {*} options
 *      [default: For createSign: { modulusLength: 2048 }, For publicEncrypt: { padding: crypto.constants.RSA_PKCS1_PSS_PADDING }]
 * @param {*} encryptType
 *      [default: "createSign"]
 *      [options: createSign, publicEncrypt]
 * @return {*} Boolean
 *
 */
```


### Keys or Hash or Other Based Methods


##### <a name="createsha"></a> `createSHA`

Create an Hash with algorithms like SHA using a data

Usage: `createSHA(data, algorithm , digest, options)`

Usage: `createSHA(data)`

Usage: `crypt.SHA(data, algorithm , digest, options)`

Usage: `crypt.SHA(data)`


```
/**
 *
 * @param {*} data
 * @param {string} [algorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { logger: console.log }]
 *      [options: logger function]
 * @return {*}
 *
 */
```

##### <a name="verifysha"></a> `verifySHA`

Verify an data using hash provided

Usage: `verifySHA(data, SHAHashToCheck, algorithm, digest, options)`

Usage: `verifySHA(data, SHAHashToCheck)`

Usage: `crypt.verifySHA(data, SHAHashToCheck, algorithm, digest, options)`

Usage: `crypt.verifySHA(data, SHAHashToCheck)`


```
/**
 *
 *
 * @param {*} data
 * @param {*} hashToCheck
 * @param {string} [algorithm="sha256"]
 *      [default: "SHA256"]
 *      [options: use function getHashes]
 * @param {string} [digest="base64"]
 *      [default: "base64"]
 *      [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options
 *      [default: { logger: console.log }]
 *      [options: logger function]
 * @return {*}
 *
 */
```

##### <a name="verifyfilecontent"></a> `verifyFileContent`



Usage: `verifyFileContentHash(data, hashToCheck, algorithm, digest, options)`

Usage: `crypt.verifyContent(data, hashToCheck, algorithm, digest, options)`


```
/**
 *
 *
 * @param {*} data
 * @param {*} hashToCheck
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*} 
 */
```


##### <a name="genkeypair"></a> `_genKeyPair`

Create a Key Pair - public and private using key generator type and options for key generation

Usage: `_genKeyPair(keyGenType, options)`

Usage: `_genKeyPair()`

Usage: `crypt.genKeyPair(keyGenType, options)`

Usage: `crypt.genKeyPair()`


```
/**
 *
 * @param {string} [keyGenType="rsa"]
 *      [default: "rsa"]
 *      [options: 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh']
 * @param {*}
 *      [default: { modulusLength: 2048 }]
 *      [options={ modulusLength: 2048 }]
 * @return {*} Returns Object { publicKey, privateKey }
 *
 */
```

##### <a name="getciphers"></a> `getCiphers`

Get list of Ciphers supported by Node Crypto Module

Usage: `getCiphers()`

Usage: `crypt.getCiphers()`


```
/**
 *
 * @return {*} Returns list of Ciphers in Crypto Module
 *
 */
```

##### <a name="gethashes"></a> `getHashes`

Get list of Hashes supported by Node Crypto Module

Usage: `getHashes()`

Usage: `crypt.getHashes()`


```
/**
 *
 * @return {*} Returns list of Hash Algorithms in Crypto Module
 *
 */
```

##### <a name="getdiffiehellman"></a> `getDiffieHellman`



Usage: `getDiffieHellman(groupName)`

Usage: `crypt.getDiffieHellman(groupName)`


```
/**
 * getDiffieHellman
 *
 * @param {*} groupName
 * @return {*[]} 
 */
```

##### <a name="getfips"></a> `getFips`



Usage: `getFips()`

Usage: `crypt.getFips()`


```
/**
 * getFips
 *
 * @return {*[]} 
 */
```

##### <a name="getrandomvalues"></a> `getRandomValues`



Usage: `getRandomValues(typedArray)`

Usage: `crypt.getRandomValues(typedArray)`


```
/**
 * getRandomValues
 *
 * @param {*} typedArray
 * @return {*[]} 
 */
```

##### <a name="getconstants"></a> `getConstants`



Usage: `getConstants(constantname)`

Usage: `crypt.getConstants(constantname)`


```
/**
 * List of constants in crypto
 *
 * @param {*} constantname
 * @return {*} 
 */
```
<!-- 
##### <a name="getsymbolslist"></a> `getSymbolsList`


``

```


``` -->

##### <a name="genkeypair"></a> `genKeyPair`

Create an public key and private key using genKeyPair or \_genKeyPair functions

Usage: `_genKeyPair(keyGenType = "rsa", options)`

Usage: `crypt.genKeyPair(keyGenType = "rsa", options)`


```
/**
 * genKeyPair
 *
 * @param {string} [keyGenType="rsa"] [default: "rsa"] [options: 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh']
 * @param {*} [options={ modulusLength: 2048 }] [default: { modulusLength: 2048 }]
 * @return {*}
 */
```

##### <a name="dumpkeyfile"></a> `dumpKeyFile`



Usage: `dumpKeyFile(filename, key, format, base)`

Usage: `crypt.dumpKeys(filename, key, format, base)`


```
/**
 * dumpKeyFile
 *
 * @param {*} filename
 * @param {*} key
 * @param {string} [format="pem"]
 * @param {string} [base="hex"]
 */
```


### TODO

Details in [todo](./.todo) file


# Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-hasher/issues)


# License

[MIT License](./LICENSE)

