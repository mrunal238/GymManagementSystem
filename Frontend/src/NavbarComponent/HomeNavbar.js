import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import gymlogo from '../images/gymlogo.jpg';


import '../index.css';


import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';



const AppNavbar = () => {

  return (
    <>

      <Container class='d-block d-sm-none fluid' style={{ backgroundColor: 'black' }} >

        <Row>
          <Col lg={4} xs={4} style={{ alignItems: 'left', marginTop: "10px" }}><img src={gymlogo} height="60px" alt="logo" /></Col>
          <Col lg={4} xs={4} class="font-weight-bold" style={{ textAlign: 'center', color: 'skyblue' }}> <h3> Gym Management System </h3>
            <p style={{ color: 'grey' }}>
            </p>
          </Col>

          <Col lg={4} xs={4} style={{ textAlign: "right", marginTop: "2px" }}>

            <IconButton aria-label="delete" href="https://www.facebook.com/" target="_blank">
              <FacebookIcon color="primary" />
            </IconButton>

            <IconButton aria-label="delete" href="https://www.instagram.com/" target="_blank">
              <InstagramIcon color="secondary" />
            </IconButton>

            <IconButton aria-label="delete" href="https://www.LinkedIn.com/" target="_blank">
              <LinkedInIcon color="primary" />
            </IconButton>

            <IconButton aria-label="delete" href="https://www.youtube.com/watch?v=tkAlzCIYT5w&t=695s" target="_blank">
              <YouTubeIcon color="secondary" />
            </IconButton>

          </Col>
        </Row>
      </Container>



      <Navbar collapseOnSelect expand="lg" sticky="top" variant="" style={{ textAlign: 'center', backgroundColor: 'black' }}>
        <div className="nav nav-tabs " > </div>
        <Navbar.Brand href="#home">

        </Navbar.Brand>

        <div claaName="nav nav-tabs">
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  >

          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" style={{ textAlign: 'center' }} >

            <Nav className="nav nav-tabs">


              <LinkContainer to="/getStarted">
                <Nav.Link className="nav-links">HOME</Nav.Link>
              </LinkContainer>


              <LinkContainer to="/gallery">
                <Nav.Link className="nav-links">GALLERY</Nav.Link>
              </LinkContainer>


              <LinkContainer to="/programs">
                <Nav.Link className="nav-links">PROGRAMS</Nav.Link>
              </LinkContainer>


              <LinkContainer to="/blogs">
                <Nav.Link className="nav-links">BLOGS</Nav.Link>
              </LinkContainer>



              <LinkContainer to="/createuser">
                <Nav.Link className="nav-links"  > SIGN UP</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link className="nav-links"  > SIGN IN</Nav.Link>
              </LinkContainer>

            </Nav>

          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
};


export default AppNavbar
