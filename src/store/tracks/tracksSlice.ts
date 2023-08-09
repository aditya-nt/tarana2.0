import { createSlice } from '@reduxjs/toolkit';

const initialTracksState: TracksState = {
  tracks: [],
  loading: false,
  error: null,
  activeTrack: null,
  isPlaying: false,
  index: 0,
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState: initialTracksState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload.tracks;
    },
    setActiveTrack: (state, action) => {
      state.activeTrack ??= action.payload;
    },
    setPlayingStatus: (state, action) => {
      state.isPlaying = action.payload;
    },
    setCurrentTrack(state, action) {
      const index = action.payload.currentIndex;
      state.index = index;
      state.activeTrack = state.tracks[index];
      state.isPlaying = true;
    },
    nextTrack(state) {
      const index = state.index + 1;
      if (state.tracks.length > index) {
        state.index = index;
        state.activeTrack = state.tracks[index];
        state.isPlaying = true;
      }
    },
    togglePlaying(state) {
      state.isPlaying = !state.isPlaying;
    },
    previousTrack(state) {
      const index = state.index - 1;
      if (index >= 0) {
        state.index = index;
        state.activeTrack = state.tracks[index];
        state.isPlaying = true;
      }
    },
  },
});

export const { setTracks, setActiveTrack, setPlayingStatus, setCurrentTrack, nextTrack, previousTrack, togglePlaying } =
  tracksSlice.actions;
export default tracksSlice.reducer;
