# hasher-apis

Simpler flexible implementation Crypto Module functions to hash/ encrypt/ decrypt content and get SHA or other algorithm hashes of text or any data

Find the demos in the [demos folder](./demos)

# APIs hasher

You can find details about used crypto algorithm details in the [nodejs crypto, cipher, decipher, diffiehellman, hmac, hash, and other docs here](https://nodejs.org/api/crypto.html)


### Commonjs Code

```

var hasher = require("hasher-apis");
hasher.createSHA(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })

```

### ESM Code

```

import { default as _createSHAHash, createSHA } as "hasher-apis";
createSHA(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })

```

### ESM or Commonjs Code

```

var hasher = import("hasher-apis");
hasher.createSHA(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })

```


### hasher-apis APIS Methods


* ##### Data or Content Based Methods `PKG**.content.xxx`
    - [createSHA, SHA](#createsha), 
    - [genKeyPair](#genkeypair), 
    - [dumpKeyFile](#dumpkeyfile)
    - [hash](#hashcontent), 
    - [dehash](#dehashcontent), 
    - [encryptWithKey](#encryptwithkey), 
    - [decryptWithKey](#decryptwithkey),
    - [verifySHA](#verifysha), 
    - [verifyContent](#verifyfilecontent), 
    - [createSign](#createsign), 
    - [createSignVerify](#createsignverify)
* ##### File Based Methods `PKG**.file.xxx`
    - [encrypt](#encrypt), 
    - [decrypt](#decrypt), 
    - [hash](#hashfile), 
    - [dehash](#dehashfile), 
    - [verifyEncrypt](#verifyhashedfile), 
    - [verifyContent](#verifyhashedfile), 
    - [verifyChecksum](#verifyfile), 
* ##### Keys or Hash or Other Based Methods `PKG**.const.xxx`
    - [getCiphers](#getciphers), 
    - [getHashes](#gethashes), 
    - [getDiffieHellman](#getdiffiehellman), 
    - [getFips](#getfips), 
    - [getRandomValues](#getrandomvalues), 
    - [getConstants](#getconstants), 
    - [getSymbolsList](#getsymbolslist), 
    


###### ***PKG - package

### hasher-apis APIS Methods



### Data or Content Based Methods



##### <a name="hashcontent"></a> `hashContent`

Create an encrytion using a content using salt and algorithms

Usage: `hashContent(data, salt, algorithm, keyAlgorithm, digest, options)`

Usage: `hashContent(data, salt)`

Usage: `content.hash(data, salt)`




### TODO

Details in [todo](./.todo) file


# Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-hasher/issues)


# License

[MIT License](./LICENSE)

