import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
});

const AlbumPage = () => {
  const params = useParams();
  console.log(params);
  const [songs, setSongs] = useState(null);

  const fetchList = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`,
        {
          method: "GET",
          headers,
        }
      );
      const result = await response.json();
      const album = result;
      console.log(album);
      setSongs(album);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    songs !== null && (
      <Container>
        <Row>
          <ListGroup>
            {songs.tracks?.data.map((track) => (
              <Col>
                <div>
                  <ListGroup.Item key={track.id}>{track.title}</ListGroup.Item>
                </div>
              </Col>
            ))}
          </ListGroup>
        </Row>
      </Container>
    )
  );
};

export default AlbumPage;
//            <img className="img-fluid" src={songs.cover_big} alt="1" />
