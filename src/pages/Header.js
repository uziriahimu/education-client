import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='p-3'>
                <Container>
                    <Navbar.Brand> <Link className='text-white text-decoration-none' to='/'>CSE Courses</Link></Navbar.Brand>
                    <Nav >
                        <Nav.Link > <Link className=" text-white text-decoration-none" to='/course'>Courses</Link></Nav.Link>
                        <Nav.Link >  <Link className=" text-white text-decoration-none" to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link ><Link className=" text-white text-decoration-none" to='/blog'>Blog</Link></Nav.Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;