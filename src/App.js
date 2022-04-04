/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <div>
          <>
            <Navbar className="px-5" bg="dark" variant="dark">
              <Navbar.Brand>Dhohir Pradana</Navbar.Brand>
              <Nav className="me-auto">
                <Link className="nav nav-item nav-link active" to="/">
                  Home
                </Link>
                <a
                  className="nav nav-item nav-link active"
                  href="https://facebook.com/8883"
                  target="_blank"
                >
                  Follow me
                </a>
              </Nav>
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
