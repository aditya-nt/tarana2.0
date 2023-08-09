import { combineReducers } from '@reduxjs/toolkit';

import playlistReducer from './playlists/playlistSlice';
import tracksReducer from './tracks/tracksSlice';

const rootReducer = combineReducers({
  playlists: playlistReducer,
  tracks: tracksReducer,
});

export default rootReducer;
