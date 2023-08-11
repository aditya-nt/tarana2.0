import { combineReducers } from '@reduxjs/toolkit';

import songReducer from '@/store/songs/SongSlice';

const rootReducer = combineReducers({
  songs: songReducer,
});

export default rootReducer;
