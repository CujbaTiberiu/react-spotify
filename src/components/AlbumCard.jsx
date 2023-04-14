import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AlbumCard = ({ artistName }) => {
  const [album, setAlbum] = useState(null);

  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

  const fetchAlbum = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        const result = await response.json();
        const Info = result.data;
        console.log(Info);
        setAlbum(Info);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    album !== null && (
      <Col xs={6} md={3} className="text-center">
        <a href={`/album/${album[0].album.id}`}>
          <img
            className="img-fluid"
            src={album[0].album.cover_medium}
            alt="1"
          />
        </a>
        <p>
          <Link to={`/album_page.html?id=${album.id}`}>
            Album:{" "}
            {album[0].title.length < 16
              ? `${album.title}`
              : `${album[0].title.substring(0, 16)}...`}
            <br />
          </Link>
          <Link to={`/artist/${album[0].artist.id}`}>
            Artist: {album[0].artist.name}
          </Link>
        </p>
      </Col>
    )
  );
};

export default AlbumCard;
