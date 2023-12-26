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


* ##### Data or Content Based Methods `PKG**.content.xxx`
    - [hash](#hashcontent), 
    - [dehash](#dehashcontent), 
    - [encryptWithKey](#encryptwithkey), 
    - [decryptWithKey](#decryptwithkey),
    - [verifySHA](#verifysha), 
    - [verifyContent](#verifyfilecontent), 
    - [createSign](#createsign), 
    - [createSignVerify](#createsignverify)
* ##### File Based Methods `PKG**.file.xxx`
    - [hash](#hashfile), 
    - [dehash](#dehashfile), 
    - [verifyEncrypt](#verifyhashedfile), 
    - [verifyContent](#verifyhashedfile), 
    - [verifyChecksum](#verifyfile), 
    - [encrypt](#encrypt), 
    - [decrypt](#decrypt) 
* ##### Keys or Hash or Other Based Methods `PKG**.crypt.xxx`
    - [createSHA, SHA](#createsha), 
    - [getCiphers](#getciphers), 
    - [getHashes](#gethashes), 
    - [getDiffieHellman](#getdiffiehellman), 
    - [getFips](#getfips), 
    - [getRandomValues](#getrandomvalues), 
    - [getConstants](#getconstants), 
    - [getSymbolsList](#getsymbolslist), 
    - [genKeyPair](#genkeypair), 
    - [dumpKeyFile](#dumpkeyfile)


###### ***PKG - package

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



### TODO

Details in [todo](./.todo) file


# Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-hasher/issues)


# License

[MIT License](./LICENSE)

