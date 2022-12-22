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

import { Routes, Route } from "react-router-dom";
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

  // Local storage for the login buttons

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const addUserNameToStorage = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
  };

  // Local storage for registering a user

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginUser = () => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("email", email);
    localStorage.setItem("userPassword", userPassword);
  };

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
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="name">User Name</Form.Label>
              <Form.Control
                name="userName"
                type="text"
                placeholder="Enter username"
                value={userName}
                onChange={({ target }) => setUsername(target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="userEmail"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="userPassword"
                type="password"
                placeholder="Password"
                value={userPassword}
                onChange={({ target }) => setUserPassword(target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your password with anyone else.
              </Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              id="confirm"
              onClick={loginUser}
            >
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
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your password with anyone else.
              </Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={addUserNameToStorage}
            >
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
