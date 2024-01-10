export function encrypt(data: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function decrypt(encryptedData: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function encryptEncodeWithCipheriv(data: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function decryptDecodeWithCipheriv(encryptedData: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function encryptWithKey(data: any, options?: any): any;
export function decryptWithKey(encryptedData: any, options?: any): any;
export function encryptWithCipheriv(data: any, salt: any): any;
export function decryptWithCipheriv(encryptedData: any, salt: any): any;
declare namespace _default {
    export const encrypt: any;
    export const decrypt: any;
    export const encryptEncodeWithCipheriv: any;
    export const decryptDecodeWithCipheriv: any;
    export const encryptWithKey: any;
    export const decryptWithKey: any;
    export { Encrypter };
    export { Crypter as AESCrypter };
    export const encryptWithCipheriv: any;
    export const decryptWithCipheriv: any;
}
export default _default;
/**
 *
 *
 * @class Encrypter
 */
export class Encrypter {
    constructor(encryptionKey: any);
    algorithm: string;
    key: any;
    /**
       *
       *
       * @param {*} clearText
       * @param {*} key
       * @param {boolean} [set=false]
       * @return {*}
       * @memberof Encrypter
       */
    encrypt(clearText: any, key: any, set?: boolean | undefined): any;
    /**
       *
       *
       * @param {*} encryptedText
       * @param {*} key
       * @param {boolean} [set=false]
       * @return {*}
       * @memberof Encrypter
       */
    decrypt(encryptedText: any, key: any, set?: boolean | undefined): any;
}
declare class Crypter {
    algorithm: string;
    iterations: number;
    keylen: number;
    digest: string;
    salt: any;
    encrypt(data: any, secretKey: any): any;
    decrypt(data: any, secretKey: any): any;
}
export { Crypter as AESCrypter };
//# sourceMappingURL=content.d.ts.map