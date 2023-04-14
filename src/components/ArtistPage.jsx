import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const ArtistPage = () => {
  const params = useParams();
  const [artist, setArtist] = useState(null);

  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
  });

  const fetchArtist = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${params.id}`,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        const result = await response.json();
        const Info = result.data;
        console.log(Info);
        setArtist(Info);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return <Container></Container>;
};
export default ArtistPage;
