import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialSongsState: SongsState = {
  songs: [],
  loading: false,
  error: null,
  activeSong: null,
  isPlaying: false,
  index: 0,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState: initialSongsState,
  reducers: {
    setSongs(state, action: PayloadAction<{ songs: Song[] }>) {
      state.songs = action.payload.songs;
    },
    setActiveSong: (state, action) => {
      state.activeSong ??= action.payload;
    },
    setPlayingStatus: (state, action) => {
      state.isPlaying = action.payload;
    },
    setCurrentSong(state, action) {
      const index = action.payload.currentIndex;
      state.index = index;
      state.activeSong = state.songs[index];
      state.isPlaying = true;
    },
    nextSong(state) {
      const index = state.index + 1;
      if (state.songs.length > index) {
        state.index = index;
        state.activeSong = state.songs[index];
        state.isPlaying = true;
      }
    },
    togglePlaying(state) {
      state.isPlaying = !state.isPlaying;
    },
    previousSong(state) {
      const index = state.index - 1;
      if (index >= 0) {
        state.index = index;
        state.activeSong = state.songs[index];
        state.isPlaying = true;
      }
    },
  },
});

export const { setSongs, setActiveSong, setPlayingStatus, setCurrentSong, nextSong, previousSong, togglePlaying } =
  songsSlice.actions;
export default songsSlice.reducer;
