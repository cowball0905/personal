import type { IPDFLinkService } from 'pdfjs-dist/types/web/interfaces';
declare class SimpleLinkService implements IPDFLinkService {
    externalLinkEnabled: boolean;
    constructor();
    /**
       * @type {number}
       */
    get pagesCount(): number;
    /**
       * @type {number}
       */
    get page(): number;
    /**
       * @param {number} _value
       */
    set page(_value: number);
    /**
       * @type {number}
       */
    get rotation(): number;
    /**
       * @param {number} _value
       */
    set rotation(_value: number);
    /**
       * @type {boolean}
       */
    get isInPresentationMode(): boolean;
    /**
       * @param {string|Array} _dest - The named, or explicit, PDF destination.
       */
    goToDestination(_dest: string | Array<any>): Promise<void>;
    /**
       * @param {number|string} _val - The page number, or page label.
       */
    goToPage(_val: number | string): void;
    /**
       * @param {HTMLAnchorElement} link
       * @param {string} url
       * @param {boolean} [_newWindow]
       */
    addLinkAttributes(link: HTMLAnchorElement, url: string, _newWindow?: boolean): void;
    /**
       * @param _dest - The PDF destination object.
       * @returns {string} The hyperlink to the PDF object.
       */
    getDestinationHash(_dest: any): string;
    /**
       * @param _hash - The PDF parameters/hash.
       * @returns {string} The hyperlink to the PDF object.
       */
    getAnchorUrl(_hash: any): string;
    /**
       * @param {string} _hash
       */
    setHash(_hash: string): void;
    /**
       * @param {string} _action
       */
    executeNamedAction(_action: string): void;
    /**
       * @param {Object} _action
       */
    executeSetOCGState(_action: object): void;
    /**
       * @param {number} _pageNum - page number.
       * @param {Object} _pageRef - reference to the page.
       */
    cachePageRef(_pageNum: number, _pageRef: object): void;
}
export { SimpleLinkService };
