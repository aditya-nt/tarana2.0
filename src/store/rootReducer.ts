// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import playlistReducer from './playlists/playlistSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  playlists: playlistReducer,
});

export default rootReducer;
