import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a user and displays in the list', () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const submitButton = screen.getByRole('button', { name: /add user/i });

  fireEvent.change(nameInput, { target: { value: 'Alice' } });
  fireEvent.change(emailInput, { target: { value: 'alice@example.com' } });
  fireEvent.click(submitButton);

  expect(screen.getByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('alice@example.com')).toBeInTheDocument();
});
