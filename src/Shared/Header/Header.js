import React, { useContext } from 'react';
import logo from '../../Asset/logo/cover3.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import { Link } from 'react-router-dom';
import { Authcontext } from '../../Context/Authprovider';
import { Button } from 'react-bootstrap';

const Header = () => {
  const {user,logout} = useContext(Authcontext);
  const handleLogout =()=>{
    logout()
    .then()
    .catch()
  }
    return (
        <div>
    <Navbar collapseOnSelect expand="lg"  >
      <Container>
        <Navbar.Brand >
        <Link to={'/'}
                            className='mt'
                        >
                            <img
                                src={logo}
                                width="120"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />

                        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href=""><Link to='/' className='text-black no-underline'>Home</Link></Nav.Link>
            <Nav.Link href="">
              <Link to='/services' className='text-black no-underline'>Services</Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to='/blog' className='text-black no-underline'>Blog</Link>
            </Nav.Link>
            </Nav>
            <Nav>
            {
              user?.email?
              <>
              <Nav.Link href=""><Link to='/myreviews' className='text-black no-underline'>Myreviews</Link></Nav.Link>
              <Nav.Link href=""><Link to='/Addservice' className='text-black no-underline'>AddService</Link></Nav.Link>
              <Button variant="outline-dark" onClick={handleLogout}>LogOut</Button>
              </>
              :
              <Nav>
              <Nav.Link href="" ><Link to='/login'className='text-black no-underline'>LogIn</Link></Nav.Link>
              <Nav.Link eventKey={2} href="">
                <Link to ='/register'className='text-black no-underline' >SignUp</Link>
              </Nav.Link>
              </Nav>
            }
            
          
          
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            
            
        </div>
    );
};

export default Header;