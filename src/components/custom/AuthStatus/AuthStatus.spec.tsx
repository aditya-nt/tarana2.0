import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import AuthStatus from '.';
import { useAuth } from '../../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

// Mock useAuth and useTranslation
jest.mock('../../../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Mock translation function to return the key
  }),
}));

const mockNavigate = jest.fn();
const mockSignout = jest.fn();
const mockUseAuth = useAuth as jest.Mock;

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('AuthStatus', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders login button when user is not logged in and header is true', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      signout: mockSignout,
    });

    render(
      <MemoryRouter>
        <AuthStatus header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  test('renders login button and heading when user is not logged in and header is false', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      signout: mockSignout,
    });

    render(
      <MemoryRouter>
        <AuthStatus />
      </MemoryRouter>
    );

    expect(screen.getByText('Gaana.com')).toBeInTheDocument();
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  test('renders logout button when user is logged in and header is true', () => {
    mockUseAuth.mockReturnValue({
      user: 'user',
      signout: mockSignout,
    });

    render(
      <MemoryRouter>
        <AuthStatus header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('logout')).toBeInTheDocument();
  });

  test('renders link to /player when user is logged in and header is false', () => {
    mockUseAuth.mockReturnValue({
      user: 'user',
      signout: mockSignout,
    });

    render(
      <MemoryRouter>
        <AuthStatus />
      </MemoryRouter>
    );

    expect(screen.getByText('play_music')).toBeInTheDocument();
  });

  test('navigates to login page on login button click', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      signout: mockSignout,
    });

    render(
      <MemoryRouter>
        <AuthStatus header />
      </MemoryRouter>
    );

    act(() => {
      fireEvent.click(screen.getByTestId('login'));
    });

    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  

  
});
