import songsReducer, { 
  setSongs, 
  setActiveSong, 
  setPlayingStatus, 
  setCurrentSong, 
  nextSong, 
  previousSong, 
  togglePlaying, 
  toggleLike 
} from './SongSlice';

describe('songsSlice reducer', () => {
  const initialState: SongsState = {
    songs: [],
    loading: false,
    error: null,
    activeSong: null,
    isPlaying: false,
    index: 0,
    likedSongs: [],
  };

  const mockSongs: Song[] = [
    { 
      artistName: 'Artist 1',
      trackCensoredName: 'Song 1',
      previewUrl: 'song1.mp3',
      collectionName: 'Collection 1',
      trackTimeMillis: 210000,
      artworkUrl100: 'artwork1.jpg'
    },
    { 
      artistName: 'Artist 2',
      trackCensoredName: 'Song 2',
      previewUrl: 'song2.mp3',
      collectionName: 'Collection 2',
      trackTimeMillis: 220000,
      artworkUrl100: 'artwork2.jpg'
    }
  ];

  it('should return the initial state', () => {
    expect(songsReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle setSongs', () => {
    const action = setSongs({ songs: mockSongs });
    const state = songsReducer(initialState, action);
    expect(state.songs).toEqual(mockSongs);
  });

  it('should handle setActiveSong', () => {
    const song = mockSongs[0];
    const action = setActiveSong(song);
    const state = songsReducer(initialState, action);
    expect(state.activeSong).toEqual(song);
  });

  it('should handle setPlayingStatus', () => {
    const action = setPlayingStatus(true);
    const state = songsReducer(initialState, action);
    expect(state.isPlaying).toBe(true);
  });

  it('should handle setCurrentSong', () => {
    const initialStateWithSongs: SongsState = {
      ...initialState,
      songs: mockSongs,
    };
    const action = setCurrentSong({ currentIndex: 1 });
    const state = songsReducer(initialStateWithSongs, action);
    expect(state.index).toBe(1);
    expect(state.activeSong).toEqual(mockSongs[1]);
    expect(state.isPlaying).toBe(true);
  });

  it('should handle nextSong', () => {
    const initialStateWithSongs: SongsState = {
      ...initialState,
      songs: mockSongs,
      index: 0
    };
    const action = nextSong();
    const state = songsReducer(initialStateWithSongs, action);
    expect(state.index).toBe(1);
    expect(state.activeSong).toEqual(mockSongs[1]);
    expect(state.isPlaying).toBe(true);
  });

  it('should handle previousSong', () => {
    const initialStateWithSongs: SongsState = {
      ...initialState,
      songs: mockSongs,
      index: 1
    };
    const action = previousSong();
    const state = songsReducer(initialStateWithSongs, action);
    expect(state.index).toBe(0);
    expect(state.activeSong).toEqual(mockSongs[0]);
    expect(state.isPlaying).toBe(true);
  });

  it('should handle togglePlaying', () => {
    const action = togglePlaying();
    const state = songsReducer({ ...initialState, isPlaying: true }, action);
    expect(state.isPlaying).toBe(false);
  });

  it('should handle toggleLike for liking a song', () => {
    const initialStateWithSongs: SongsState = {
      ...initialState,
      songs: mockSongs,
    };
    const action = toggleLike(mockSongs[0].previewUrl);
    const state = songsReducer(initialStateWithSongs, action);
    expect(state.likedSongs).toEqual([mockSongs[0]]);
  });

  it('should handle toggleLike for unliking a song', () => {
    const initialStateWithLikedSong: SongsState = {
      ...initialState,
      songs: mockSongs,
      likedSongs: [mockSongs[0]],
    };
    const action = toggleLike(mockSongs[0].previewUrl);
    const state = songsReducer(initialStateWithLikedSong, action);
    expect(state.likedSongs).toEqual([]);
  });
});
