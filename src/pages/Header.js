import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" className='p-3'>
                <Container>
                    <Navbar.Brand> <Link className='text-white text-decoration-none' to='/'>CSE Courses</Link></Navbar.Brand>
                    <Nav >
                        <Nav.Link > <Link className=" text-white text-decoration-none" to='/course'>Courses</Link></Nav.Link>
                        <Nav.Link >  <Link className=" text-white text-decoration-none" to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link ><Link className=" text-white text-decoration-none" to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogout}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='text-white text-decoration-none me-2' to='/login'>Login</Link>
                                        <Link className='text-white text-decoration-none' to='/register'>Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}></Image>
                                    : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>


                </Container>

            </Navbar>
        </div>
    );
};

export default Header;