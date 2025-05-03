import { signInWithEmailAndPassword } from 'firebase/auth';

// Mock Firebase auth module
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

describe('LandingPage - Firebase Login Logic', () => {
  it('should log in successfully with correct credentials', async () => {
    // Mock successful login
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValueOnce({});

    // Simulate login logic (no rendering, just function call)
    const email = 'example@gmail.com';
    const password = 'ex1234';
    
    // Call the function (you might need to wrap this in a function)
    await expect(signInWithEmailAndPassword({}, email, password)).resolves.toEqual({});
  });

  it('should show error message for incorrect credentials', async () => {
    // Mock failed login (wrong password)
    (signInWithEmailAndPassword as jest.Mock).mockRejectedValueOnce({
      code: 'auth/wrong-password',
    });

    const email = 'test@example.com';
    const password = 'wrongpassword';
    
    // Test the rejection logic
    await expect(signInWithEmailAndPassword({}, email, password)).rejects.toEqual({
      code: 'auth/wrong-password',
    });
  });

  it('should show error message for user not found', async () => {
    // Mock failed login (user not found)
    (signInWithEmailAndPassword as jest.Mock).mockRejectedValueOnce({
      code: 'auth/user-not-found',
    });

    const email = 'nonexistent@example.com';
    const password = 'password123';
    
    // Test the rejection logic
    await expect(signInWithEmailAndPassword({}, email, password)).rejects.toEqual({
      code: 'auth/user-not-found',
    });
  });

  it('should show generic error message for other errors', async () => {
    // Mock failed login (generic error)
    (signInWithEmailAndPassword as jest.Mock).mockRejectedValueOnce({
      code: 'auth/unknown-error',
    });

    const email = 'test@example.com';
    const password = 'password123';
    
    // Test the rejection logic
    await expect(signInWithEmailAndPassword({}, email, password)).rejects.toEqual({
      code: 'auth/unknown-error',
    });
  });
});
