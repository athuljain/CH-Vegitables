// import CHLogo from '../Assets/CHLogo.jpeg';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import '../Styles/ChNavBar.css';
// import { Link,NavLink } from 'react-router-dom';

// const CHNavbar = () => {
//   return (
//     <>
//       <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
//         <Container fluid>
//           {/* Set up Navbar.Brand as a logo */}
//           <Navbar.Brand href="#" className="logo-container">
//             <img
//               src={CHLogo}
//               alt="CH Logo"
//               className="logo-img"
//             />
//            <Link style={{textDecoration:"none"}} to={'/'}> <h4 className="ch-vegetables">CH Vegetables</h4></Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll" className="navbar-collapse">
//             {/* Utilize ms-auto to push these links to the right */}
//             <Nav className="ms-auto" navbarScroll>
//             <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', marginRight: '20px' }} navbarScroll>
//   <NavLink to="/about" className="nav-link">About</NavLink>
//   <NavDropdown title="CH" id="navbarScrollingDropdown">
//     <NavDropdown.Item as={NavLink} to="/staff">
//       Staff
//     </NavDropdown.Item>
//     <NavDropdown.Item as={NavLink} to="/gallery">
//       Gallery
//     </NavDropdown.Item>
//     <NavDropdown.Divider />
//     <NavDropdown.Item as={NavLink} to="/something-else">
//       Something else here
//     </NavDropdown.Item>
//   </NavDropdown>
//   <NavLink to="/services" className="nav-link">Service</NavLink>
//   <NavLink to="/contact" className="nav-link">Contact</NavLink>
// </Nav>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default CHNavbar;


import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CHLogo from '../Assets/CHLogo.jpeg';
import '../Styles/ChNavBar.css';

const CHNavbar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container fluid>
        {/* Brand/Logo Section */}
        <Navbar.Brand as={Link} to="/" className="logo-container">
          <img
            src={CHLogo}
            alt="CH Logo"
            className="logo-img"
          />
          <h4 className="ch-vegetables">CH Vegetables</h4>
        </Navbar.Brand>

        {/* Responsive Hamburger Toggle */}
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        {/* Collapsible Menu Links */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-center" navbarScroll>
            <NavLink to="/" className={({ isActive }) => `nav-link custom-link ${isActive ? 'active-link' : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link custom-link ${isActive ? 'active-link' : ''}`}>
              About
            </NavLink>
            
            {/* Styled Dropdown Menu */}
            <NavDropdown title="CH Hub" id="navbarScrollingDropdown" className="custom-dropdown">
              <NavDropdown.Item as={NavLink} to="/staff" className="dropdown-custom-item">
                Staff
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/gallery" className="dropdown-custom-item">
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Divider className="dropdown-custom-divider" />
              <NavDropdown.Item as={NavLink} to="/something-else" className="dropdown-custom-item">
                Something Else
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/services" className={({ isActive }) => `nav-link custom-link ${isActive ? 'active-link' : ''}`}>
              Services
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link custom-link ${isActive ? 'active-link' : ''}`}>
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CHNavbar;