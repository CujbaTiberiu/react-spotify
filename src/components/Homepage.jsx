import { Container, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";
import { useState, useEffect } from "react";

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
  const [albums, setAlbums] = useState([]);

  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

  const fetchAlbums = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=rock`,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        const result = await response.json();
        const Info = result.data;
        console.log(Info);
        setAlbums(Info);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <Container className="text-light">
      <h2>Rock</h2>
      <Row>{albums && albums.map((album) => <AlbumCard album={album} />)}</Row>
    </Container>
  );
};

export default Homepage;
