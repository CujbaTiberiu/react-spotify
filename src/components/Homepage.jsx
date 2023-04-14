import { Container, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const Homepage = () => {
  let rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  let popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  return (
    <Container>
      <h2>Rock</h2>
      <Row>
        <AlbumCard artistname="queen" />
        <AlbumCard artistname="jamesblunt" />
        <AlbumCard artistname="oasis" />
        <AlbumCard artistname="thewho" />
      </Row>
    </Container>
  );
};

export default Homepage;
