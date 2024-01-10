export function encryptWithKeysFromTo(remotePath: any, remoteDestPath: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, keyOptions?: {
    modulusLength: number;
}, options?: any): any;
export function decryptWithKeysFromTo(remotePath: any, remoteDestPath: any, privateKey: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function encrypt(remotePath: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, keyOptions?: {
    modulusLength: number;
}, options?: any): any;
export function decrypt(remotePath: any, privateKey: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function encryptFromTo(remotePath: any, remoteDestPath: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function decryptFromTo(remotePath: any, remoteDestPath: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function encryptContentTo(remoteDestPath: any, data: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function decryptContentFrom(remoteDestPath: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function loadContentFrom(remoteDestPath: any, salt: any, algorithm?: string | undefined, keyAlgorithm?: string | undefined, digest?: string | undefined, options?: any): any;
declare namespace _default {
    const encryptWithKeysFromTo: any;
    const decryptWithKeysFromTo: any;
    const encryptFromTo: any;
    const decryptFromTo: any;
    const encryptContentTo: any;
    const decryptContentFrom: any;
    const loadContentFrom: any;
}
export default _default;
//# sourceMappingURL=files.d.ts.map