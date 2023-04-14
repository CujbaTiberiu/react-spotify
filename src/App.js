import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import { Container } from "react-bootstrap";
import MySide from "./components/MySide";
import MyNav from "./components/MyNav";
import MyPlayer from "./components/MyPlayer";

function App() {
  return (
    <BrowserRouter>
      <Container className="mainContainer d-flex" fluid>
        <Container className="sideCont" fluid>
          <MySide />
        </Container>
        <Container className="myElements">
          <MyNav />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/artist/:name" element={<ArtistPage />}></Route>
            <Route path="/album/:id" element={<AlbumPage />}></Route>
          </Routes>
          <MyPlayer />
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;