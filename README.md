# hasher-apis


# APIs hasher

###


`Commonjs Code`

```

var hasher = require("hasher-apis");
hasher._createSHAHash(algorithm = "sha256", data="texter data", digest="base64", options = { logger: console.log })
hasher.createSHA(algorithm = "sha256", data="texter data", digest="base64", options = { logger: console.log })

```


`ESM Code`

```

import { default as _createSHAHash, createSHA } as "hasher-apis";
_createSHAHash(algorithm = "sha256", data="texter data", digest="base64", options = { logger: console.log })
createSHA(algorithm = "sha256", data="texter data", digest="base64", options = { logger: console.log })

```


`ESM or Commonjs Code`

```

var hasher = import("hasher-apis");
hasher._createSHAHash(algorithm = "sha256", data="texter data", digest="base64", options = { logger: console.log })
hasher.createSHA(algorithm = "sha256", data="texter data", digest="base64", options = { logger: console.log })

```


<!-- `_createSHAHash` : Usage : `_createSHAHash(algorithm, data, digest, options)` -->

`createSHA` : Usage : `createSHA(algorithm, data, digest, options)`


<!-- `_fileContentHash` : Usage : `_fileContentHash(data, algorithm, keyAlgorithm, salt, digest, options)` -->

`hashContent` : Usage : `hashContent(data, algorithm, keyAlgorithm, salt, digest, options)`


<!-- `_fileContentDeHash` : Usage: `_fileContentDeHash(hashdata, algorithm, keyAlgorithm , salt, digest, options)` -->

`dehashContent` : Usage: `dehashContent(hashdata, algorithm, keyAlgorithm , salt, digest, options)`


<!-- `_verifySHAHash` : Usage: `_verifySHAHash(algorithm, data, digest, hashToCheck, options)` -->

`verifySHA` : Usage: `verifySHA(algorithm, data, digest, hashToCheck, options)`


`hashFile` : Usage : `hashFile(remotePath, remoteDestPath, algorithm, keyAlgorithm, salt, digest, options)`


`dehashFile` : Usage: `dehashFile(remotePath, remoteDestPath, algorithm, keyAlgorithm, salt, digest, options)`


<!-- `verifyFileHash` : Usage: `verifyFileHash(remotePath, algorithm, digest, hashToCheck, options)` -->

<!-- 

New Version: v0.0.13 features

verifySHA, 
_verifySHAHash, 
verifyFileContent, 
_verifyFileContentHash, 
verifyHashedFile, 
_verifyHashedFile,
verifyFile,
_verifyFile,
encrypt, 
_encryptFile, 
decrypt, 
_decryptFile, 
createSign, 
_createSign, 
createSignVerify, 
_createSignVerify
getCiphers, 
getHashes, 

-->



### Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-hasher/issues)

# License

[MIT License](./LICENSE)
