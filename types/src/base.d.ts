declare namespace _default {
    export { createSHA };
    export { createSign };
    export { genKeyPair };
    export { dumpKeyFile };
    export { createSign as _createSign };
    export { genKeyPair as _genKeyPair };
    export { dumpKeyFile as _dumpKeyFile };
    export { createSHA as _createSHAHash };
}
export default _default;
/**
 *
 *
 * @param {*} data
 * @param {string} [algorithm="sha256"] [default: "SHA256"] [options: use function getHashes]
 * @param {string} [digest="base64"] [options: ['ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex']]
 * @param {*} options [default: { logger: console.log }] [options: logger function]
 * @return {*}
 */
export function createSHA(data: any, algorithm?: string | undefined, digest?: string | undefined, options?: any): any;
/**
 *
 *
 * @param {*} data
 * @param {*} algorithm [default: "SHA256"] [options: use function getHashes]
 * @param {*} base [default: "hex"] [options: ]
 * @param {*} keyGenType [default: "rsa"] [options: 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh']
 * @param {*} keyOptions [default: For createSign & publicEncrypt: { modulusLength: 2048 }]
 * @param {*} options [default: For createSign: { modulusLength: 2048 }, For publicEncrypt: { padding: crypto.constants.RSA_PKCS1_PSS_PADDING}]
 * @param {*} encryptType [default: "createSign"] [options: createSign, publicEncrypt]
 * @return {*}
 */
export function createSign(data: any, algorithm: any, base: any, keyGenType: any, keyOptions: any, options: any, encryptType: any, padding: any): any;
/**
 *
 *
 * @param {string} [keyGenType="rsa"] [default: "rsa"] [options: 'rsa', 'rsa-pss', 'dsa', 'ec', 'ed25519', 'ed448', 'x25519', 'x448', or 'dh']
 * @param {*} [options={ modulusLength: 2048 }] [default: { modulusLength: 2048 }]
 * @return {*}
 */
export function genKeyPair(keyGenType?: string | undefined, options?: any): any;
/**
 * dumpKeyFile
 *
 * @param {*} filename
 * @param {*} key
 * @param {string} [format="pem"]
 * @param {string} [base="hex"]
 */
export function dumpKeyFile(filename: any, key: any, format?: string | undefined, type?: string, base?: string | undefined): boolean;
export { createSHA as _createSHAHash, createSign as _createSign, genKeyPair as _genKeyPair, dumpKeyFile as _dumpKeyFile };
//# sourceMappingURL=base.d.ts.map