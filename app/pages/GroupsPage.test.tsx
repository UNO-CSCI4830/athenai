import React, { act } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { GroupsPage } from './GroupsPage';
import { MemoryRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Routes } from 'react-router';

jest.mock("../firebase");
import { firestore } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

import { getFirestore } from 'firebase/firestore';

jest.mock("firebase/firestore", () => {
  const original = jest.requireActual("firebase/firestore");
  return {
    ...original,
    getDocs: jest.fn(),
    collection: jest.fn(),
  };
});

// jest.mock('firebase/firestore', () => ({
//   getFirestore: jest.fn(() => ({ /* return a mocked Firestore instance */ })),
//   collection: jest.fn(() => ({ name: "Test 1", description: " A group", profilePic: "uhh" })),
// }));



test("renders group data", async () => {
  // Setup fake Firestore data
  const mockGroups = [
    { id: "1", data: () => ({ name: "Test Group", description: "Desc", profilePic: "url", posts: {likes: 0, message: "hi", name:"John Test"}}) },
  ];
  (getDocs as jest.Mock).mockResolvedValue({
    forEach: (callback: any) => mockGroups.forEach(callback),
  });

  render(<MemoryRouter>
    <GroupsPage />
    </MemoryRouter>);
  
  //await new Promise(res => setTimeout(res, 4000));

  //await waitFor(() => expect(screen.getByText("Test Group")).toBeInTheDocument(), { timeout: 2000 });
  
  //expect(screen.getByText("Test Group")).toBeInTheDocument();

})
  

test('renders basic page', () => {
  render(
    <MemoryRouter>
        <GroupsPage />
    </MemoryRouter>);
    const group = screen.getByText("Loading...");

  expect(group).toBeInTheDocument();
});


// test('loads and displays groups', async () => {
//   await act(async () => {
//     render(<MemoryRouter>
//       <GroupsPage />
//       </MemoryRouter>);
//   });
//   await waitFor(() => {
//     expect(screen.getByText('Test Group')).toBeInTheDocument();
//   });
// });


test("renders group data", async () => {

  render(<MemoryRouter>
    <GroupsPage />
    </MemoryRouter>);

  await waitFor(() => expect(screen.getByText("Thing")).toBeInTheDocument(), { timeout: 2000 });

})

