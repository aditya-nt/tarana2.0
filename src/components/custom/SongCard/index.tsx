import { noop } from "lodash";
import { ReactNode } from "react";
import { Card } from "react-bootstrap";

interface SongCardProps {
  song: Song;
  onClick? : () => void;
  children?: ReactNode;
}

function SongCard({ song, onClick = noop, children }: SongCardProps) {

  return song ? (
    <Card style={{ width: '14rem', padding: '0px' }} onClick={onClick}>
      <Card.Img variant="top" src={song.artworkUrl100} height={'200rem'} />
      <Card.Body>
        <Card.Title>{song.trackCensoredName}</Card.Title>
        <Card.Text>{song.artistName}</Card.Text>
        {children}
      </Card.Body>
    </Card>
  ): <>skelton</>;
}

export default SongCard;
