/// <reference types="vite/client" />

// Meta Pixel global
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}
