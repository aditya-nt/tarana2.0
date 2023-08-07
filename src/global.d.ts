declare interface Song {
    artistName: string;
    trackCensoredName: string;
    previewUrl: string;
    collectionName: string;
    trackTimeMillis: number;
    artworkUrl100: string;
  }
  
declare interface SongState {
    songs: Song[];
    currentSong: Song;
    songAction: {
      search: string;
      isPlaying: boolean;
    };
    searchSongs: Song[];
    currentIndex: number;
    favSongs: Song[];
  }


declare  interface Song {
    artistName: string;
    trackCensoredName: string;
    previewUrl: string;
    collectionName: string;
    trackTimeMillis: number;
    artworkUrl100: string;
  }
  
declare  interface SongsResponse {
    results: Song[];
  }


declare interface SongPlayerContainerProps {
    currentSong: Song | null;
    isPlaying: boolean;
    setPlay: (isPlaying: boolean) => void;
    setCurrentSong: (song: Song) => void;
    addIndex: () => void;
    reduceIndex: () => void;
    songs: Song[];
    search: string;
    searchSongs: Song[];
    currentIndex: number;
  }
declare  interface NavHeaderProps {
    children?: React.ReactNode;
    loggedUser?: string;
  }


declare interface SongContainerProps {
    songs: Song[];
  }

declare interface UserAuth {
    name: string;
    email: string;
  }
  
declare interface InitialStateType {
    userAuth: UserAuth;
    isLoggedIn: boolean;
  }

 declare interface FormValues {
    username: string;
    email: string;
    password: string;
  }