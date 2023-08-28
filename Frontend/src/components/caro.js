
import b1 from '../images/b11.jpg';
import b2 from '../images/b12.jpg';

import b6 from '../images/b13.jpg';
import b7 from '../images/b14.jpg';
import b8 from '../images/b15.png';

import 'bootstrap/dist/css/bootstrap.min.css'                 // These 2 lines
import { Button, Form, Alert, Nav, Navbar, Container, NavDropdown, Spinner, Carousel } from 'react-bootstrap'

const Caro = () => {
  return (


    <div class="container-lg-1 container-sm-1">
      <Carousel variant="light" interval="2000">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b1}
            alt="image1"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>Gym Management System</h3>
            <p style={{ color: 'white' }}>Train like a beast. Look like a beauty</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b2}
            alt="image2"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>Gym Management System</h3>
            <p style={{ color: 'white' }}>Train like a beast. Look like a beauty</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b7}
            alt="image2"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>Gym Management System</h3>
            <p style={{ color: 'white' }}>Train like a beast. Look like a beauty</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b8}
            alt="image3"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>Gym Management System</h3>
            <p style={{ color: 'white' }}>Train like a beast. Look like a beauty</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b6}
            alt="image4"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'white' }}>Gym Management System</h3>
            <p style={{ color: 'white' }}>Train like a beast. Look like a beauty</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>


  )
}

export default Caro