// app/pages/__tests__/LearningModules.test.tsx

// ✅ Setup: Fallbacks for test environment
import { TextEncoder } from "util";
global.TextEncoder = TextEncoder;

global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};

// ✅ Imports
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LearningModules } from "../LearningModules";

// ✅ Mock Firebase modules
jest.mock("../../firebase", () => ({
  auth: {
    onAuthStateChanged: (callback: (user: null) => void) => {
      callback(null); // Simulate no user
      return () => {}; // Return dummy unsubscribe
    },
    currentUser: null,
  },
  firestore: {},
}));

// ✅ Test Suite
describe("LearningModules Page", () => {
  test("renders fallback UI when no user is logged in", async () => {
    render(
      <BrowserRouter>
        <LearningModules />
      </BrowserRouter>
    );

    expect(await screen.findByText(/Course Modules/i)).toBeInTheDocument();
    expect(screen.getByText(/Library/i)).toBeInTheDocument();
  });
});
