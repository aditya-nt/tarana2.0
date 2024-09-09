// HomePage.test.tsx

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import HomePage from '.';
import songReducer from '../../store/songs/SongSlice';
import { useSongs } from './helper';
import { DEFAULT_SEARCH } from '../../lib/constants';
import { useTranslation } from 'react-i18next';
import store from '../../store/store';


jest.mock('./helper', () => ({
  useSongs: jest.fn(),
}));


jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));


jest.mock('../../components/base/Loader', () => () => <div>Loader</div>);
jest.mock('../../components/custom/NoResult', () => () => <div>NoResult</div>);
jest.mock('../../containers/SongContainer', () => () => <div>SongContainer</div>);

const mockStore = configureStore({
  reducer: {
    songs: songReducer,
  },
});

describe('HomePage', () => {
  beforeEach(() => {
    (useSongs as jest.Mock).mockReturnValue({
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      songs: [],
      status: 'loading',
      error: null,
    });
  });

 

  it('should render the NoResult component when no songs are available', async () => {
    (useSongs as jest.Mock).mockReturnValue({
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      songs: [],
      status: 'success',
      error: null,
    });

    render(
      <Provider store={mockStore}>
        <HomePage />
      </Provider>
    );

    expect(await screen.findByText('NoResult')).toBeInTheDocument();
  });

  it('should render the SongContainer component when there are songs available', async () => {
    (useSongs as jest.Mock).mockReturnValue({
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      songs: [{ id: '1', text: 'Test Song', liked: false }],
      status: 'success',
      error: null,
    });

    render(
      <Provider store={mockStore}>
        <HomePage />
      </Provider>
    );

    expect(await screen.findByText('SongContainer')).toBeInTheDocument();
  });

 
  });

 
 



