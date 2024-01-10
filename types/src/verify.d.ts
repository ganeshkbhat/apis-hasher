export function verify(data: any, SHAHashToCheck: any, algorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function SHA(data: any, SHAHashToCheck: any, algorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function contentWithChecksum(data: any, hashToCheck: any, algorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function contentChecksum(data: any, hashToCheck: any, algorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function checksum(remotePath: any, checksum: any, algorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function fileWithChecksum(remotePath: any, checksum: any, algorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function fileWithContent(remotePath: any, hashToCheck: any, algorithm?: string | undefined, digest?: string | undefined, options?: any): any;
export function createSign(data: any, algorithm: any, base: any, keyGenType: any, keyOptions: any, options: any, encryptType: any, padding: any): any;
export function createSignVerify(data: any, signature: any, publicKey: any, algorithm: any, base: any, options: any, encryptType: any): any;
declare namespace _default {
    const SHA: any;
    const verify: any;
    const contentChecksum: any;
    const compareContentChecksum: any;
    const checksum: any;
    const fileWithChecksum: any;
    const fileWithContent: any;
    const createSign: any;
    const createSignVerify: any;
}
export default _default;
//# sourceMappingURL=verify.d.ts.map