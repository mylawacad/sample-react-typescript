import React from "react";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
import Link from "../Components/Link";

const navBarStyles = {
  backgroundColor: "#fff",
  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)"
};

const Header: React.FC = () => {
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        style={navBarStyles}
      >
        <Container>
          <Navbar.Brand to="/" as={Link}>
            Sample-React-Typescript
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Listings" id="basic-nav-dropdown">
                <NavDropdown.Item href="#suggested">Suggested Listings</NavDropdown.Item>
                <NavDropdown.Item href="#recent">Recent Listings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
