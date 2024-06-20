import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialSongsState: SongsState = {
  songs: [],
  loading: false,
  error: null,
  activeSong: null,
  isPlaying: false,
  index: 0,
  likedSongs: []
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
    toggleLike(state, action: PayloadAction<string>) {
      const previewUrl = action.payload;
      const existingIndex = state.likedSongs.findIndex((song) => song.previewUrl === previewUrl);
      if (existingIndex !== -1) {
        // Unlike song if already liked
        state.likedSongs = state.likedSongs.filter((song) => song.previewUrl !== previewUrl);
      } else {
        // Like song if not already liked
        const songToAdd = state.songs.find((song) => song.previewUrl === previewUrl);
        if (songToAdd) {
          state.likedSongs.push(songToAdd);
        }
      }
    },
  
  },
});

export const { setSongs, setActiveSong, setPlayingStatus, setCurrentSong, nextSong, previousSong, togglePlaying,toggleLike } =
  songsSlice.actions;
export default songsSlice.reducer;
