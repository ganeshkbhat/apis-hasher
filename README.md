# hasher-apis

Simpler flexible implementation Crypto Module functions to hash/ encrypt/ decrypt content and get SHA or other algorithm hashes of text or any data

Find the demos in the [demos folder](./demos)

# APIs hasher

You can find details about used crypto algorithm details in the [nodejs crypto, cipher, decipher, diffiehellman, hmac, hash, and other docs here](https://nodejs.org/api/crypto.html)


### Commonjs Code

```

var crypt = require("hasher-apis");
crypt.createSHA(
    data="texter data", 
    algorithm = "sha256", 
    digest="base64", 
    options = { logger: console.log }
    )

```

### ESM Code

```

import { default as _createSHAHash, createSHA } as "hasher-apis";
createSHA(
    data="texter data", 
    algorithm = "sha256", 
    digest="base64", 
    options = { logger: console.log }
    )

```

### ESM or Commonjs Code

```

var crypt = import("hasher-apis");
crypt.createSHA(
    data="texter data", 
    algorithm = "sha256", 
    digest="base64", 
    options = { logger: console.log }
    )

```


### hasher-apis APIS Methods


* ##### Data or Content Based Methods `PKG**.content.xxx`
    - [genKeyPair](#genkeypair), 
    - [dumpKeyFile](#dumpkeyfile)
    - [hash / encrypt](#encrypt), 
    - [dehash / decrypt](#decrypt), 
    - [encryptWithKey](#encryptwithkey), 
    - [decryptWithKey](#decryptwithkey),
* ##### File Based Methods `PKG**.file.xxx`
    - [encrypt](#fileencrypt), 
    - [decrypt](#filedecrypt), 
    <!-- - [hash](#hashfile), 
    - [dehash](#dehashfile),  -->
* ##### Verify Content or File Methods `PKG**.file.xxx`
    - [createSHA](#createsha), 
    - [SHA](#createsha), 
    - [verifySHA](#verifysha), 
    - [verifyContent](#verifyfilecontent), 
    - [verifyEncrypt](#verifyhashedfile), 
    - [verifyContent](#verifyhashedfile), 
    - [verifyChecksum](#verifyfile), 
    - [createSign](#createsign), 
    - [createSignVerify](#createsignverify)
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



### Demo Usages for Content (with or without keys)


##### <a name="crypt"></a> `hashContent / encrypt`

Create an encrytion using a content using salt and algorithms

Usage: `encrypt(data, salt, algorithm, keyAlgorithm, digest, options)`


```

```



### TODO

Details in [todo](./.todo) file


# Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-hasher/issues)


# License

[MIT License](./LICENSE)

