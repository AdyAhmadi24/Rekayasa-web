import React from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import {} from "@material-ui/core";
import { Link } from "react-router-dom";

function Navabar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/Home">
        <img src="https://raw.githubusercontent.com/AdyAhmadi24/Pictures/main/Penguin.png" width="80" height="65" className="d-inline-block align-top" alt="Rekayasa Web" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="#features">Blog</Nav.Link>
        <Nav.Link href="/About">Kontak</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Navabar;
