# hasher-apis

# APIs hasher

###


`Commonjs Code`

```

var hasher = require("hasher-apis");
hasher._createSHAHash(algorithm = "sha256", data="texter data", digest="base64", options = { logger: console.log })


```


`ESM Code`

```

import { default as _createSHAHash } as "hasher-apis";
_createSHAHash(algorithm = "sha256", data="texter data", digest="base64", options = { logger: console.log })


```


`ESM or Commonjs Code`

```

var hasher = import("hasher-apis");
hasher._createSHAHash(algorithm = "sha256", data="texter data", digest="base64", options = { logger: console.log })


```


`_createSHAHash` : Usage : `_createSHAHash(algorithm, data, digest, options)`


`_fileContentHash` : Usage : `_fileContentHash(data, algorithm, keyAlgorithm, salt, digest, options)`


`_fileContentDeHash` : Usage: `_fileContentDeHash(hashdata, algorithm, keyAlgorithm , salt, digest, options)`


`_verifySHAHash` : Usage: `_verifySHAHash(remotePath, options)`


`_verifyFileContentHash` : Usage: `_verifyFileContentHash(remotePath, options)`



### Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-hasher/issues)

# License

[MIT License](./LICENSE)
