// Imports
import { useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Modal,
  Form,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";

import { Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import Home from "../Pages/Home";
import Incidents from "../Pages/Incidents";
import Ob from "../Pages/Ob";

const Header = () => {
  // State
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Second modal

  const handleCloseTwo = () => setShowTwo(false);
  const handleShowTwo = () => setShowTwo(true);

  return (
    <>
      <Navbar bg="light" expand="lg" variant="light" className="p-3">
        <Navbar.Brand>Reports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/incidents">
              <Nav.Link>Incidents Reports</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ob">
              <Nav.Link>Ob Entries</Nav.Link>
            </LinkContainer>
          </Nav>

          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button onClick={handleShow} variant="outline-dark">
                Register
              </Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="First group">
              <Button onClick={handleShowTwo} variant="outline-dark">
                Login
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Navbar.Collapse>
      </Navbar>

      {/* Register */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill in the form to register</Modal.Body>
        <Container className="mb-2">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                We'll never share your password with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Container>
      </Modal>

      {/* Login */}
      <Modal show={showTwo} onHide={handleCloseTwo}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill in the form to login</Modal.Body>
        <Container className="mb-2">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address/Username</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                We'll never share your password with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </Modal>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/ob" element={<Ob />} />
      </Routes>
    </>
  );
};

export default Header;
