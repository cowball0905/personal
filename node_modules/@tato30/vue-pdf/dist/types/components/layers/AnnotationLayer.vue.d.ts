import type { AnnotationEventPayload } from '../types';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    page?: import("pdfjs-dist/types/src/display/api").PDFPageProxy | undefined;
    viewport?: import("pdfjs-dist/types/src/display/display_utils").PageViewport | undefined;
    document?: import("pdfjs-dist/types/src/display/api").PDFDocumentProxy | undefined;
    annotationsFilter?: string[] | undefined;
    annotationsMap?: object | undefined;
    imageResourcesPath?: string | undefined;
    hideForms?: boolean | undefined;
    enableScripting?: boolean | undefined;
    intent: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    annotation: (payload: AnnotationEventPayload) => void;
    annotationLoaded: (payload: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    page?: import("pdfjs-dist/types/src/display/api").PDFPageProxy | undefined;
    viewport?: import("pdfjs-dist/types/src/display/display_utils").PageViewport | undefined;
    document?: import("pdfjs-dist/types/src/display/api").PDFDocumentProxy | undefined;
    annotationsFilter?: string[] | undefined;
    annotationsMap?: object | undefined;
    imageResourcesPath?: string | undefined;
    hideForms?: boolean | undefined;
    enableScripting?: boolean | undefined;
    intent: string;
}>>> & {
    onAnnotation?: ((payload: AnnotationEventPayload) => any) | undefined;
    onAnnotationLoaded?: ((payload: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
