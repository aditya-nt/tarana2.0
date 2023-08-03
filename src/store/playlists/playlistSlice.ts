// playlists/playlistSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Playlist {
  id: string;
  name: string;
  songs: string[]; // Modify the songs array as per your song data structure
}

interface PlaylistsState {
  playlists: Playlist[];
}

const initialState: PlaylistsState = {
  playlists: [],
};

const playlistSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    addPlaylist(state, action: PayloadAction<Playlist>) {
      state.playlists.push(action.payload);
    },
    removePlaylist(state, action: PayloadAction<string>) {
      state.playlists = state.playlists.filter((playlist) => playlist.id !== action.payload);
    },
  },
});

export const { addPlaylist, removePlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
