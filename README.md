# hasher-apis

Simpler flexible implementation Crypto Module functions to hash/ encrypt/ decrypt content and get SHA or other algorithm hashes of text or any data

Find the demos in the [demos folder](./demos)

# APIs hasher

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
    - [hashContent](#link), [dehashContent](#link), [encryptWithKey](#link), [decryptWithKey](#link)
* ##### File Based Methods
    - [hashFile](#link), [dehashFile](#link), [verifyHashedFile](#link), [verifyFile](#link), [encrypt](#link), [decrypt](#link), [createSign](#link), [createSignVerify](#link)
* ##### Keys or Hash or Other Based Methods
    - [createSHA](#link), [verifySHA](#link), [verifyFileContent](#link), [getCiphers](#link), [getHashes](#link), [getDiffieHellman](#link), [getFips](#link), [getRandomValues](#link), [getConstants](#link), [getSymbolsList](#link), [genKeyPair](#link), [dumpKeyFile](#link)


### hasher-apis APIS Methods



### Data or Content Based Methods



##### <a name="link"></a> `hashContent`

Create an encrytion using a content using salt and algorithms

Usage: `hashContent(data, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `hashContent(data, salt)`

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

##### <a name="link"></a> `dehashContent`

Create an decryption of encrypted data using salt and algorithms

Usage: `dehashContent(hashdata, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `dehashContent(hashdata, salt)`

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

##### <a name="link"></a> `encryptWithKey`


``

```


```

##### <a name="link"></a> `decryptWithKey`


``

```


```


### File Based Methods


##### <a name="link"></a> `hashFile`

Create an encrytion of a file using salt and algorithms

Usage: `hashFile(remotePath, remoteDestPath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `hashFile(remotePath, remoteDestPath, salt)`

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

##### <a name="link"></a> `dehashFile`

Create an decryption of encrypted file using salt and algorithms

Usage: `dehashFile(remotePath, remoteDestPath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `dehashFile(remotePath, remoteDestPath, salt)`

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

##### <a name="link"></a> `fileHashFromContent`

Create an encrytion of a file using salt and algorithms

Usage: `fileHashFromContent(remotePath, content, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `fileHashFromContent(remotePath, content, salt)`

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

##### <a name="link"></a> `fileDeHashContent`

Create an encrytion of a file using salt and algorithms

Usage: `fileDeHashContent(remoteDestPath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `fileDeHashContent(remoteDestPath, salt)`

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

##### <a name="link"></a> `fileDeHashLoadContent`

Create an encrytion of a file using salt and algorithms

Usage: `fileDeHashLoadContent(remoteDestPath, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `fileDeHashLoadContent(remoteDestPath, salt)`

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


##### <a name="link"></a> `verifyFileContent`

Verify a content data using hash provided

Usage: `verifyFileContent(data, hashToCheck, algorithm, digest, options)`

Usage: `verifyFileContent(data, hashToCheck)`

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

##### <a name="link"></a> `verifyHashedFile`

Verify a file data using hash provided

Usage: `verifyHashedFile(remotePath, hashToCheck, algorithm, digest, options)`

Usage: `verifyHashedFile(remotePath, hashToCheck)`

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

##### <a name="link"></a> `verifyFile`

Verify a file data using checksum provided - market standards

Usage: `verifyFile(remotePath, checksum, algorithm, digest, options)`

Usage: `verifyFile(remotePath, checksum)`

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

##### <a name="link"></a> `encrypt`

Encrypt a file

Usage: `encrypt(remotePath, remoteDestPath, algorithm, keyAlgorithm, digest, keyOptions, options)`

Usage: `encrypt(remotePath, remoteDestPath)`

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

##### <a name="link"></a> `decrypt`

Decrypt a file

Usage: `decrypt(remotePath, remoteDestPath, privateKey, algorithm, keyAlgorithm, digest, options)`

Usage: `decrypt(remotePath, remoteDestPath, privateKey)`

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

##### <a name="link"></a> `createSign`

Sign a Data

Usage: `createSign(data, algorithm, base, keyGenType, keyOptions, options, encryptType)`

Usage: `createSign(data)`

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

##### <a name="link"></a> `createSignVerify`

Verify a Signed Data

Usage: `createSignVerify(data, signature, publicKey, algorithm, base, options, encryptType)`

Usage: `createSignVerify(data, signature, publicKey)`

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


##### <a name="link"></a> `createSHA`

Create an Hash with algorithms like SHA using a data

Usage: `createSHA(data, algorithm , digest, options)`

Usage: `createSHA(data)`

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

##### <a name="link"></a> `verifySHA`

Verify an data using hash provided

Usage: `verifySHA(data, hashToCheck, algorithm, digest, options)`

Usage: `verifySHA(data, hashToCheck)`

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

##### <a name="link"></a> `verifyFileContent`


``

```


```


##### <a name="link"></a> `_genKeyPair`

Create a Key Pair - public and private using key generator type and options for key generation

Usage: `_genKeyPair(keyGenType, options)`

Usage: `_genKeyPair()`

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

##### <a name="link"></a> `getCiphers`

Get list of Ciphers supported by Node Crypto Module

Usage: `getCiphers()`

```
/**
 *
 * @return {*} Returns list of Ciphers in Crypto Module
 *
 */
```

##### <a name="link"></a> `getHashes`

Get list of Hashes supported by Node Crypto Module

Usage: `getHashes()`

```
/**
 *
 * @return {*} Returns list of Hash Algorithms in Crypto Module
 *
 */
```

##### <a name="link"></a> `getDiffieHellman`


``

```


```

##### <a name="link"></a> `getFips`


``

```


```

##### <a name="link"></a> `getRandomValues`


``

```


```

##### <a name="link"></a> `getConstants`


``

```


```

##### <a name="link"></a> `getSymbolsList`


``

```


```

##### <a name="link"></a> `genKeyPair`

Create an public key and private key using genKeyPair or \_genKeyPair functions

`_genKeyPair(keyGenType = "rsa", options = { modulusLength: 2048 })`

```
/**
 * genKeyPair
 *
 * @param {string} [keyGenType="rsa"] [default: "rsa"] [options: 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh']
 * @param {*} [options={ modulusLength: 2048 }] [default: { modulusLength: 2048 }]
 * @return {*}
 */
```

##### <a name="link"></a> `dumpKeyFile`


``

```


```


##### Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-hasher/issues)

# License

[MIT License](./LICENSE)
