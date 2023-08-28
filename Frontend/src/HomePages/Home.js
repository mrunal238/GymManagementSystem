import Cardi from '../components/card';
import Caro from '../components/caro';
import 'bootstrap/dist/css/bootstrap.min.css'                
import { Navbar, Container} from 'react-bootstrap'   
const GetStarted= () => {
    return (
        <div>
         <Caro/>
        <Cardi/>
        <Container>

  <Navbar expand="lg" variant="light" bg="light" fixed="bottom">
    <Container>
      <Navbar.Brand href="#">@202e  Gym Management System All Rights Reserved.r</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
        </div>

 
   
    )
} 

export default GetStarted