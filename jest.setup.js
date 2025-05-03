// jest.setup.js
import '@testing-library/jest-dom'; // Enables jest-dom matchers
import { TextEncoder, TextDecoder } from 'util'; // Polyfill for TextEncoder and TextDecoder

// Polyfill TextEncoder and TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
