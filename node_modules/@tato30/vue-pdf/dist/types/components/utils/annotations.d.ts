import type { PDFDocumentProxy } from 'pdfjs-dist';
import type { AnnotationEventPayload } from '../types';
declare const EVENTS_TO_HANDLER: string[];
declare function annotationEventsHandler(evt: Event, PDFDoc: PDFDocumentProxy, Annotations: Object[]): AnnotationEventPayload | Promise<AnnotationEventPayload | undefined> | undefined;
export { annotationEventsHandler, EVENTS_TO_HANDLER };
