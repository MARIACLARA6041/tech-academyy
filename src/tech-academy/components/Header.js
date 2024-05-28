import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/imgs/logo-roxo-bg-branco.png";

function Header() {
  return (
    <header>
      <Navbar
        fixed="top"
        expand="xxl"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary dark "
      >
        <Container fluid>
          <Link to="/">
            <img
              width="auto"
              height="50"
              src={logo}
              className="d-inline-block align-top"
              alt="logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="myNavbar"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            bg="dark"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-item" to="/">
                  Home
                </Link>
                <Link className="nav-item" to="/login">
                  Login
                </Link>
                <Link className="nav-item" to="/faq">
                  Dúvidas Frequentes
                </Link>
                <Link className="nav-item" to="/login">
                  Logout
                </Link>
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
