import { Container, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Homepage = () => {
  // eslint-disable-next-line no-unused-vars
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

  // eslint-disable-next-line no-unused-vars
  let popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  // eslint-disable-next-line no-unused-vars
  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];
  const [rockalbums, setRockAlbums] = useState([]);
  const [popalbums, setPopAlbums] = useState([]);
  const [hiphopalbums, setHiphopAlbums] = useState([]);
  const [queryalbums, setQueryAlbums] = useState([]);

  const query = useSelector((state) => state.search);
  console.log(query);

  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

  const fetchRockAlbums = async () => {
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
        setRockAlbums(Info);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchPopAlbums = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=pop`,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        const result = await response.json();
        const Info = result.data;
        console.log(Info);
        setPopAlbums(Info);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchHiphopAlbums = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=hiphop`,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        const result = await response.json();
        const Info = result.data;
        console.log(Info);
        setHiphopAlbums(Info);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchQuerySearch = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=` + query,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        const result = await response.json();
        const Info = result.data;
        console.log(Info);
        setQueryAlbums(Info);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRockAlbums();
    fetchPopAlbums();
    fetchHiphopAlbums();
    fetchQuerySearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRandomAlbums = (albums) => {
    // Randomly select 4 albums from the provided array
    const shuffled = albums.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  return (
    <Container className="text-light pb-5 mb-5">
      {query.length > 0 && (
        <>
          <h2>Results</h2>
          <Row className="py-4">
            {queryalbums &&
              queryalbums
                .slice(0, 12)
                .map((album) => <AlbumCard key={album.id} album={album} />)}
          </Row>
        </>
      )}

      <h2>Rock</h2>
      <Row className="py-4">
        {rockalbums &&
          getRandomAlbums(rockalbums).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
      </Row>
      <h2>Pop</h2>
      <Row className="py-4">
        {popalbums &&
          getRandomAlbums(popalbums).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
      </Row>
      <h2>Hiphop</h2>
      <Row className="py-4">
        {hiphopalbums &&
          getRandomAlbums(hiphopalbums).map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
      </Row>
    </Container>
  );
};

export default Homepage;
