declare module 'reveal.js' {
  interface RevealOptions {
    hash?: boolean;
    controls?: boolean;
    progress?: boolean;
    center?: boolean;
    transition?: string;
    transitionSpeed?: string;
    backgroundTransition?: string;
    keyboard?: boolean;
    touch?: boolean;
    width?: number;
    height?: number;
    margin?: number;
    minScale?: number;
    maxScale?: number;
    embedded?: boolean;
    showNotes?: boolean;
    autoSlide?: number;
    overview?: boolean;
    fragments?: boolean;
    fragmentInURL?: boolean;
  }

  interface RevealStatic {
    initialize(options?: RevealOptions): Promise<void>;
    on(event: string, callback: (e: any) => void): void;
    off(event: string, callback: (e: any) => void): void;
    toggleOverview(show?: boolean): void;
    getIndices(): { h: number; v: number; f: number };
    getTotalSlides(): number;
    getSlidePastCount(): number;
    destroy(): void;
    sync(): void;
    layout(): void;
    slide(h: number, v?: number, f?: number): void;
    configure(options: Partial<RevealOptions>): void;
  }

  const Reveal: {
    new (): RevealStatic;
  };

  export default Reveal;
}
