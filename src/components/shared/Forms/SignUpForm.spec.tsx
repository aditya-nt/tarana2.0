import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpForm from './SignUpForm';

describe('SignUpForm', () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    render(<SignUpForm onSubmit={onSubmit} />);
  });
  it('renders email and password inputs', () => {
    const { getByLabelText } = render(<SignUpForm onSubmit={onSubmit} />);
    expect(getByLabelText('name')).toBeInTheDocument();
    expect(getByLabelText('email_address')).toBeInTheDocument();
    expect(getByLabelText('password')).toBeInTheDocument();
  });
  it('submits the form with valid inputs', async () => {
   
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });

   
    fireEvent.click(screen.getByRole('button', { name: /sign_up/i }));

    
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      });
    });
  });
});
