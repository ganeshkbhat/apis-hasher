export const file: {
    encryptWithKeysFromTo: (remotePath: any, remoteDestPath: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, keyOptions?: {
        modulusLength: number;
    }, options?: any) => any;
    decryptWithKeysFromTo: (remotePath: any, remoteDestPath: any, privateKey: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any) => any;
    encrypt: (remotePath: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, keyOptions?: {
        modulusLength: number;
    }, options?: any) => any;
    decrypt: (remotePath: any, privateKey: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any) => any;
    encryptFromTo: (remotePath: any, remoteDestPath: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any) => any;
    decryptFromTo: (remotePath: any, remoteDestPath: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any) => any;
    encryptContentTo: (remoteDestPath: any, data: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any) => any;
    decryptContentFrom: (remoteDestPath: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any) => any;
    loadContentFrom: (remoteDestPath: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any) => any;
    default: {
        encryptWithKeysFromTo: any;
        decryptWithKeysFromTo: any;
        encryptFromTo: any;
        decryptFromTo: any;
        encryptContentTo: any;
        decryptContentFrom: any;
        loadContentFrom: any;
    };
    load: (remoteDestPath: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any) => any;
};
export const content: any;
export const consts: any;
export const base: any;
export const crypt: any;
export const hasher: any;
export default hasherdefault;
//# sourceMappingURL=index.d.mts.map