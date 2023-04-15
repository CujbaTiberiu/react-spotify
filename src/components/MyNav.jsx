import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Container>
      <Nav>
        <Nav.Item>
          <Link to="/" className="nav-link">
            HOME
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">TRENDING</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">PODCAST</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">NEW RELEASES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">DISCOVER</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default MyNav;
