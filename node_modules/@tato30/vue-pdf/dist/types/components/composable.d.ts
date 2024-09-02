import type { Ref } from 'vue';
import type { PDFDestination, PDFInfo, PDFOptions, PDFSrc } from './types';
/**
 * @typedef {Object} UsePDFParameters
 * @property {string} password
 * Document password to unlock content
 * @property {function} onProgress
 * Callback to request a password if a wrong or no password was provided. The callback receives two parameters: a function that should be called with the new password, and a reason (see PasswordResponses).
 * @property {function} onPassword
 * Callback to be able to monitor the loading progress of the PDF file (necessary to implement e.g. a loading bar). The callback receives an OnProgressParameters argument. if this function is used option.password is ignored
 * @property {function} onError
 * Callback to be able to handle errors during loading
 * */
/**
 *
 * @param {string | URL | TypedArray | PDFDataRangeTransport | DocumentInitParameters} src
 * Can be a URL where a PDF file is located, a typed array (Uint8Array) already populated with data, or a parameter object.
 * @param {UsePDFParameters} options
 * UsePDF object parameters
 */
export declare function usePDF(src: PDFSrc | Ref<PDFSrc>, options?: PDFOptions): {
    pdf: import("vue").ShallowRef<import("pdfjs-dist/types/src/display/api").PDFDocumentLoadingTask | undefined>;
    pages: import("vue").ShallowRef<number>;
    info: import("vue").ShallowRef<{}> | import("vue").ShallowRef<PDFInfo>;
    print: (dpi?: number, filename?: string) => Promise<void>;
    download: (filename?: string) => Promise<void>;
    getPDFDestination: (destination: string | any[] | null) => Promise<PDFDestination | null>;
};
