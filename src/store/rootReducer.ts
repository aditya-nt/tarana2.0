import { combineReducers } from '@reduxjs/toolkit';

import playlistReducer from '@/store/playlists/playlistSlice';
import tracksReducer from '@/store/tracks/tracksSlice';

const rootReducer = combineReducers({
  playlists: playlistReducer,
  tracks: tracksReducer,
});

export default rootReducer;
