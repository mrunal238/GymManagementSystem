import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../index.css';

const AdminNavbar = () => {
  return (
    <div className="sidebar">
      <Navbar expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column">
            <LinkContainer to="/memberprofile">
              <Nav.Link className="nav-link">Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/healthstatus">
              <Nav.Link className="nav-link">Health Status</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/membsubplan">
              <Nav.Link className="nav-link">Plan List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/membform">
              <Nav.Link className="nav-link">Membership Form</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/membworkoutplan">
              <Nav.Link className="nav-link">Workout Plan</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/membdietplan">
              <Nav.Link className="nav-link">Diet Plan</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/memberorder">
              <Nav.Link className="nav-link">Orders</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
