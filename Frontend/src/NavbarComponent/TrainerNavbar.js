import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../index.css';

const TrainNavbar = () => {
  return (
    <div className="sidebar">
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark" className="train-navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="train-navbar-collapse">
          <Nav className="flex-column">
            <LinkContainer to="/trainprofile">
              <Nav.Link className="nav-links">PROFILE</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dietplan">
              <Nav.Link className="nav-links">DIET-PLAN</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/workoutplan">
              <Nav.Link className="nav-links">WORKOUT-PLAN</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TrainNavbar;