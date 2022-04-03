import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <div>
          <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>Dhohir Pradana</Navbar.Brand>
                <Nav className="me-auto">
                  <Link className="nav nav-item nav-link active" to="/">
                    Home
                  </Link>
                </Nav>
              </Container>
            </Navbar>
          </>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
