import { Container, Row, Col, ProgressBar, Image } from "react-bootstrap";

import shuffle from "./playerbuttons/Shuffle.png";
import previous from "./playerbuttons/Previous.png";
import play from "./playerbuttons/Play.png";
import next from "./playerbuttons/Next.png";
import repeat from "./playerbuttons/Repeat.png";
import { useSelector } from "react-redux";
/* eslint-disable jsx-a11y/anchor-is-valid */

const MyPlayer = () => {
  const showSong = useSelector((state) => state.selectedSong);
  console.log(showSong);

  return (
    <Container fluid className="bg-container myPlayer">
      <Row className="justify-content-center">
        <Col
          xs={6}
          xl={8}
          className="playerControls mt-1 d-flex justify-content-center align-items-center"
        >
          <div>
            <a href="#" className="mx-1">
              <Image src={shuffle} alt="shuffle" />
            </a>
            <a href="#" className="mx-1">
              <Image src={previous} alt="previous" />
            </a>
            <a href="#" className="mx-1">
              <Image src={play} alt="play" />
            </a>
            <a href="#" className="mx-1">
              <Image src={next} alt="next" />
            </a>
            <a href="#" className="mx-1">
              <Image src={repeat} alt="repeat" />
            </a>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center playBar">
        <Col xs={8} md={6}>
          <p className="text-center">{showSong}</p>
          <ProgressBar now={0} />
        </Col>
      </Row>
    </Container>
  );
};

export default MyPlayer;
