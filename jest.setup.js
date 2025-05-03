import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder and TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.mock('firebase/auth', () => ({
    ...jest.requireActual('firebase/auth'),
    onAuthStateChanged: jest.fn(),
    signOut: jest.fn(),
  }));