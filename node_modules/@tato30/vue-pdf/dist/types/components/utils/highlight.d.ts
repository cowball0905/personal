import type { TextContent } from 'pdfjs-dist/types/src/display/text_layer';
import type { HighlightOptions, Match } from '../types';
declare function highlightMatches(matches: Match[], textContent: TextContent, textDivs: HTMLElement[]): void;
declare function resetDivs(textContent: TextContent, textDivs: HTMLElement[]): void;
declare function findMatches(queries: string[], textContent: TextContent, options: HighlightOptions): Match[];
export { findMatches, highlightMatches, resetDivs };
