import React from 'react';
import './index.css'
import mochiLogo from '../asset/img/mochi.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';





const Header = () => {
  return (
    <Navbar expand="lg" className="p-2" style={{ backgroundColor: '#f9c3c1' }}>
      <Container className="d-flex justify-content-between align-items-center">

        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            alt="logo"
            src={mochiLogo}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          <span className='text-white fs-4'>Mochi</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">

          <Nav className="d-flex align-items-center text-white">
            {/* <Nav.Link href="#categories">Categories</Nav.Link> */}
            <NavDropdown title="Categories" id="basic-nav-dropdown" className='text-white'>
              <NavDropdown.Item href="#mochi">Mochi Basic</NavDropdown.Item>
              <NavDropdown.Item href="#daifuku">Daifuku</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deals" >Deals</Nav.Link>
            <Nav.Link href="#whats-new" >What's New</Nav.Link>
            <Nav.Link href="#delivery">Delivery</Nav.Link>
          </Nav>


          <div className="search-bar ms-auto">
            <input type="text" placeholder="Search Product" className="form-control p-2" />
          </div>


          <Nav className="account-cart d-flex align-items-center ms-3 text-white" >
            <Nav.Link href="#account" className="d-flex align-items-center me-4">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Account
            </Nav.Link>
            <Nav.Link href="#cart" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCartShopping} className="me-2" />
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
