import CHLogo from '../Assets/CHLogo.jpeg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/ChNavBar.css';
import { Link } from 'react-router-dom';

const CHNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
        <Container fluid>
          {/* Set up Navbar.Brand as a logo */}
          <Navbar.Brand href="#" className="logo-container">
            <img
              src={CHLogo}
              alt="CH Logo"
              className="logo-img"
            />
           <Link style={{textDecoration:"none"}} to={'/'}> <h4 className="ch-vegetables">CH Vegetables</h4></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navbar-collapse">
            {/* Utilize ms-auto to push these links to the right */}
            <Nav className="ms-auto" navbarScroll>
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', marginRight: '20px' }} navbarScroll>
                <Nav.Link href="/about" className="nav-link">About</Nav.Link>
                <NavDropdown title="CH" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/staff">Staff</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2" className="nav-link">Service</Nav.Link>
                <Nav.Link href="#action2" className="nav-link">Contact</Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CHNavbar;
