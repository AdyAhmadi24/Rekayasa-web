import React from "react";
import Articles from "./components/Articels";
import User from "./components/User";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import {} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header>
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img src="https://raw.githubusercontent.com/AdyAhmadi24/Pictures/main/Penguin.png" width="80" height="65" className="d-inline-block align-top" alt="Rekayasa Web" />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Blog</Nav.Link>
              <Nav.Link href="https://adyahmadi24.github.io/#">Kontak</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </>
      </header>
      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default App;
