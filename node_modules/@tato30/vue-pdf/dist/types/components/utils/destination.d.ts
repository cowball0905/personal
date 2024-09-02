/**
 * Written by Jason Harwig as part of PDFjs React Outline Viewer
 * Source: https://codesandbox.io/s/rp18w
 */
import type { PDFDocumentProxy, RefProxy } from 'pdfjs-dist/types/src/display/api';
import type { PDFLocation } from '../types';
declare function getDestinationArray(doc: PDFDocumentProxy, dest: string | any[] | null): Promise<any[] | null>;
declare function getDestinationRef(doc: PDFDocumentProxy, destArray: any[] | null): Promise<RefProxy | null>;
declare function getLocation(type: string, spec: number[]): PDFLocation | null;
declare const isSpecLike: (list: any[]) => list is number[];
export { getDestinationArray, getDestinationRef, getLocation, isSpecLike, };
