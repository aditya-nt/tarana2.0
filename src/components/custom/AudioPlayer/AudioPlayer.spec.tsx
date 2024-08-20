import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AudioPlayer from '.';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { toggleLike } from '../../../store/songs/SongSlice';
import { AnyAction } from 'redux';


interface Song {
  previewUrl: string;
  title: string;
  artistName: string;
  trackCensoredName: string;
  collectionName: string;
  trackTimeMillis: number;
  artworkUrl100: string;
}


const mockStore = configureStore<unknown, AnyAction>([]);

const initialState = {
  songs: {
    likedSongs: [],
  },
};

const createMockSong = (): Song => ({
  previewUrl: 'http://example.com/song.mp3',
  title: 'Test Song',
  artistName: 'Test Artist',
  trackCensoredName: 'Test Song Censored',
  collectionName: 'Test Collection',
  trackTimeMillis: 200000,
  artworkUrl100: 'http://example.com/artwork.jpg',
});

describe('AudioPlayer Component', () => {
  
  let activeSong: Song;
  let togglePlayMock: jest.Mock;
  let handleNextMock: jest.Mock;
  let handlePreviousMock: jest.Mock;
  let store: ReturnType<typeof mockStore>;
  beforeEach(() => {
    
    activeSong = createMockSong();
    togglePlayMock = jest.fn();
    handleNextMock = jest.fn();
    handlePreviousMock = jest.fn();
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AudioPlayer
          isPlaying={false}
          activeSong={activeSong}
          handleNext={handleNextMock}
          handlePrevious={handlePreviousMock}
          togglePlay={togglePlayMock}
        />
      </Provider>
    );
  });
  

  

//   test('plays and pauses the song', () => {
   
//     const mockTogglePlay = jest.fn();
//     render(
//       <Provider store={store}>
//         <AudioPlayer
//           isPlaying={true}
//           activeSong={activeSong}
//           handleNext={handleNextMock}
//           handlePrevious={handlePreviousMock}
//           togglePlay={togglePlayMock}
//         />
//       </Provider>
//     );
//   const playButton =screen.getByTestId('play');
//   expect(playButton).toBeInTheDocument();
//   fireEvent.click(playButton);
//   expect(mockTogglePlay).toHaveBeenCalledTimes(1);
// });
  

  test('handles next and previous actions', () => {
    const nextButton = screen.getByTestId('next');
    fireEvent.click(nextButton);
    expect(handleNextMock).toHaveBeenCalled();

    const prevButton = screen.getByTestId('prev');
    fireEvent.click(prevButton);
    expect(handlePreviousMock).toHaveBeenCalled();
  });

  test('toggles like', () => {
    const likeButton = screen.getByTestId('like');
    fireEvent.click(likeButton);
    const actions = store.getActions();
    expect(actions).toContainEqual(toggleLike(activeSong.previewUrl));
  });
});


