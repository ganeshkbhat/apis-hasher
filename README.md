# hasher-apis

# APIs hasher

###

`Commonjs Code`

```

var hasher = require("hasher-apis");
hasher._createSHAHash(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })
hasher.createSHA(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })

```

`ESM Code`

```

import { default as _createSHAHash, createSHA } as "hasher-apis";
_createSHAHash(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })
createSHA(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })

```

`ESM or Commonjs Code`

```

var hasher = import("hasher-apis");
hasher._createSHAHash(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })
hasher.createSHA(data="texter data", algorithm = "sha256", digest="base64", options = { logger: console.log })

```

### `createSHA` 
Usage: `createSHA(data, algorithm , digest, options)`


### `hashContent` 
Usage: `hashContent(data, salt, algorithm, keyAlgorithm, digest, options)`


### `dehashContent` 
Usage: `dehashContent(hashdata, salt, algorithm, keyAlgorithm, digest, options)`


### `hashFile` 
Usage: `hashFile(remotePath, remoteDestPath, salt, algorithm, keyAlgorithm, digest, options)`


### `dehashFile` 
Usage: `dehashFile(remotePath, remoteDestPath, salt, algorithm, keyAlgorithm, digest, options)`


### `verifySHA` 
Usage: `verifySHA(data, hashToCheck, algorithm, digest, options)`


### `verifyFileContent` 
Usage: `verifyFileContent(data, hashToCheck, algorithm, digest, options)`


### `verifyHashedFile` 
Usage: `verifyHashedFile(remotePath, hashToCheck, algorithm, digest, options)`


### `verifyFile` 
Usage: `verifyFile(remotePath, checksum, algorithm, digest, options)`


### `encrypt` 
Usage: `encrypt(remotePath, remoteDestPath, algorithm, keyAlgorithm, digest, keyOptions, options)`


### `decrypt` 
Usage: `decrypt(remotePath, remoteDestPath, privateKey, algorithm, keyAlgorithm, digest, options)`


### `_genKeyPair` 
Usage: `_genKeyPair(keyGenType, options)`


### `getCiphers` 
Usage: `getCiphers()`


### `getHashes` 
Usage: `getHashes()`


### `createSign` 
Usage: `createSign(data, algorithm, base, keyGenType, keyOptions, options, encryptType)`


### `createSignVerify` 
Usage: `createSignVerify(data, signature, publicKey, algorithm, base, options, encryptType)`


### Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-hasher/issues)

# License

[MIT License](./LICENSE)
