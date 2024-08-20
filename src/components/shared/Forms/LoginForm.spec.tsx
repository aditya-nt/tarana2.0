import React from 'react';
import { render, fireEvent, waitFor,screen } from '@testing-library/react';
import LoginForm from './LoginForm'; 
describe.only('LoginForm component', () => { 
  
  const mockSubmit = jest.fn(); 
  it('renders email and password inputs', () => {
    const { getByLabelText } = render(<LoginForm onSubmit={mockSubmit} />);
    expect(getByLabelText('email_address')).toBeInTheDocument();
    expect(getByLabelText('password')).toBeInTheDocument();
  });

  it('submits the form with valid inputs', async () => {
  
    const { getByLabelText, getByText } = render(<LoginForm onSubmit={mockSubmit} />);
   
    fireEvent.change(getByLabelText('email_address'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('password'), { target: { value: 'password123' } });

    
    fireEvent.click(getByText('log_in'));

    
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });
});
