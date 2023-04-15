import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BiAlbum } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { selectSong } from "../redux/actions";

let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
});

const AlbumPage = () => {
  const params = useParams();
  console.log(params);
  const [songs, setSongs] = useState(null);
  const dispatch = useDispatch();

  const handleSongClick = (selectedSong) => {
    dispatch(selectSong(selectedSong));
  };

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
      <Container className="text-center my-5">
        <Row>
          <Col xs={12} md={5}>
            <img className="img-fluid" src={songs.cover_big} alt="album pic" />{" "}
            <div className="text-light my-2 d-flex justify-content-center align-items-baseline">
              <BiAlbum />
              <p>Album name: {songs.title}</p>
            </div>
          </Col>
          <Col xs={12} md={7} className="sm-mt-3">
            {songs.tracks?.data.map((track) => (
              <p
                className="text-light"
                key={track.id}
                onClick={() => handleSongClick(track.title)}
              >
                {track.artist.name} - {track.title}
              </p>
            ))}
          </Col>
        </Row>
      </Container>
    )
  );
};

export default AlbumPage;
