import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoginPage from '.';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

jest.mock('../../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('LoginPage Component', () => {
  const mockNavigate = jest.fn();
  const mockSignin = jest.fn();

  beforeEach(() => {
   
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useLocation as jest.Mock).mockReturnValue({
      state: { from: { pathname: '/home' } },
    });
    (useAuth as jest.Mock).mockReturnValue({
      signin: mockSignin,
    });
  });

  it('should navigate to the correct path after successful login', async () => {
    const { getByLabelText, getByText } = render(<LoginPage />);

   
    fireEvent.change(getByLabelText('email_address'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('password'), { target: { value: 'password123' } });

   
    fireEvent.click(getByText('log_in'));

    
    await waitFor(() => {
      expect(mockSignin).toHaveBeenCalledWith('test@example.com', expect.any(Function));
    });

   
    const callback = mockSignin.mock.calls[0][1]; 
    callback(); 

    
    expect(mockNavigate).toHaveBeenCalledWith('/home', { replace: true });
  });
});
