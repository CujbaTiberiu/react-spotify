import React from "react";
import { Navbar, Nav, Button, ButtonGroup } from "react-bootstrap";
import { FaHome, FaBookOpen } from "react-icons/fa";
import logo from "./logo/Spotify_Logo.png";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const MySide = () => {
  return (
    <Navbar bg="navbar" variant="light" fixed="left" expand="sm">
      <div className="nav-container">
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            <img
              src={logo}
              alt="Spotify_Logo"
              width="131"
              height="40"
              className="mb-5"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Link to="/" className="nav-link">
              <FaHome className="me-2" /> Home
            </Link>
            <Nav.Link href="#">
              <FaBookOpen className="me-2" /> Your Library
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search" />
          </Form.Group>
          <Button variant="dark" type="submit" className="h-50">
            Go
          </Button>
        </Form>
      </div>
      <div className="nav-btn">
        <button className="signup-btn">Sign Up</button>
        <button className="login-btn">Login</button>
        <div className="ml-2">
          <span>Cookie Policy</span> | <span>Privacy</span>
        </div>
      </div>
    </Navbar>
  );
};

export default MySide;
