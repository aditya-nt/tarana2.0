import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PlaylistPage from '.';
import songReducer from '../../store/songs/SongSlice';
import { useTranslation } from 'react-i18next';


jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, 
  }),
}));


const store = configureStore({
  reducer: {
    songs: songReducer, 
  },
  preloadedState: {
    songs: {
      songs: [],
      loading: false,
      error: null,
      activeSong: null,
      isPlaying: false,
      index: 0,
      likedSongs: [], 
    },
  },
});

describe('PlaylistPage', () => {
  test('renders the PlaylistPage component', () => {
    render(
      <Provider store={store}>
        <PlaylistPage />
      </Provider>
    );

   
    expect(screen.getByText('playlist')).toBeInTheDocument();

  
    
  });
});
