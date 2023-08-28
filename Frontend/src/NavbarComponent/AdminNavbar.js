import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../index.css';


const AdminNavbar = () => {
  return (
    <div className="sidebar">
      <Navbar expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flex-column">
            <LinkContainer to="/adminprofile">
              <Nav.Link className="nav-link">Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/userlist">
              <Nav.Link className="nav-link">User List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/planlist">
              <Nav.Link className="nav-link">Membership Plans</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/gymmemberlist">
              <Nav.Link className="nav-link">Gym Member List</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
