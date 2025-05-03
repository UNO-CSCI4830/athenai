import { render, screen, waitFor } from '@testing-library/react'; // Import testing library
import {ProfilePage} from '~/pages/ProfilePage'; // Import the ProfilePage component
import { getAuth } from 'firebase/auth'; // Firebase authentication module
import { getDoc } from 'firebase/firestore'; // Firebase Firestore module

// Mock Firebase modules
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    currentUser: { uid: 'test-user-id' },
  })),
}));

jest.mock('firebase/firestore', () => ({
  getDoc: jest.fn(),
  doc: jest.fn(),
  getFirestore: jest.fn(),
}));

describe('ProfilePage', () => {
  it('renders username from Firestore', async () => {
    const mockData = { username: 'TestUser' };

    // Mock the Firestore data fetching function to return mock data
    (getDoc as jest.Mock).mockResolvedValueOnce({
      exists: () => true,
      data: () => mockData,
    });

    // Render the ProfilePage component
    render(<ProfilePage />);

    // Check that the "Profile Page" heading is always present
    expect(screen.getByText(/Profile Page/i)).toBeInTheDocument();

    // Wait for the async username fetch to complete and then check for the username display
    await waitFor(() =>
      expect(screen.getByText(/Welcome, TestUser!/i)).toBeInTheDocument()
    );
  });

  it('displays loading message when data is not yet fetched', () => {
    // Mock the Firestore fetch to simulate a loading state
    (getDoc as jest.Mock).mockResolvedValueOnce(new Promise(() => {}));

    // Render the ProfilePage component
    render(<ProfilePage />);

    // Check if a loading message is displayed
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('shows an error message if user data does not exist in Firestore', async () => {
    // Mock the Firestore fetch to return a non-existent user
    (getDoc as jest.Mock).mockResolvedValueOnce({
      exists: () => false,
    });

    // Render the ProfilePage component
    render(<ProfilePage />);

    // Wait for the async operation to complete and check for error message
    await waitFor(() =>
      expect(screen.getByText(/User data not found/i)).toBeInTheDocument()
    );
  });
});
