import logo from "./logo.svg";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import background from "./images/2159457.jpg";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./home";

function App() {
  return (
    <div>
      <div
        className="d-flex justify-content-center "
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Home />
      </div>
    </div>
  );
}

export default App;
