import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ArtistPage = () => {
  const params = useParams();
  console.log(params);
  const [artist, setArtist] = useState(null);

  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
  });

  const fetchArtist = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${params.name}`,
        {
          method: "GET",
          headers,
        }
      );
      const result = await response.json();
      const album = result.data;
      console.log(album);
      setArtist(album);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    artist !== null && (
      <Container className="text-light py-5">
        <h2>Tracks</h2>
        <Row className="py-5">
          {artist.map((a) => (
            <Col key={a.id} xs={6} md={3} className="text-center">
              <Link to={"/album/" + a.album.id}>
                <img className="img-fluid" src={a.album.cover_medium} alt="1" />
              </Link>
              <p>
                <Link className="text-light" to={"/album/" + a.album.id}>
                  {" "}
                  {a.title.length < 16
                    ? `${a.title}`
                    : `${a.title.substring(0, 16)}...`}
                  <br />
                </Link>
                <Link className="text-light" to={"/artist/" + a.artist.name}>
                  Artist: {a.artist.name}
                </Link>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    )
  );
};
export default ArtistPage;
