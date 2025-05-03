import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { OllamaChatPage } from './aichat'; 

describe('OllamaChatPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('renders input and send button', () => {
    render(<OllamaChatPage />);
    expect(screen.getByPlaceholderText(/enter your message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  test('allows typing in the input box', () => {
    render(<OllamaChatPage />);
    const input = screen.getByPlaceholderText(/enter your message/i);
    fireEvent.change(input, { target: { value: 'Hello AI!' } });
    expect(input).toHaveValue('Hello AI!');
  });

  test('displays user and assistant messages after sending', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            message: {
              role: 'assistant',
              content: 'Hello, human.',
            },
          }),
      })
    ) as jest.Mock;

    render(<OllamaChatPage />);

    const input = screen.getByPlaceholderText(/enter your message/i);
    const button = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Hi there' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/you:/i)).toBeInTheDocument();
      expect(screen.getByText(/hi there/i)).toBeInTheDocument();
      expect(screen.getByText(/athena\.i\.:/i)).toBeInTheDocument();
      expect(screen.getByText(/hello, human/i)).toBeInTheDocument();
    });

    (global.fetch as jest.Mock).mockRestore();
  });
});
