declare interface Song {
  artistName: string;
  trackCensoredName: string;
  previewUrl: string;
  collectionName: string;
  trackTimeMillis: number;
  artworkUrl100: string;
}

declare interface Track {
  id: string;
  imageUrl: string;
  name: string;
  audioUrl: string;
  artistName: string;
}

declare interface TracksState {
  tracks: Track[];
  loading: boolean;
  error: string | null;
  activeTrack: Track | null;
  isPlaying: boolean;
  index: number;
}
