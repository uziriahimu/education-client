import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Navigation = () => {
    const { user, logOut } = useContext(AuthContext)
    const [dark, setDark] = useState(false)
    const [open, setOpen] = useState('');
    console.log(user);

    const handleToggle = (e) => {
        setDark(e.target.checked);
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-3 mb-5'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Image style={{ height: "30px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRla0sOBNaMZhbffH_Z3om-SP-FMBd6_ok9GA&usqp=CAU' />{' '}
                    CSE Courses
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    {/* navigation menus */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                        <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

                    </Nav>

                    {/* user and authentication part */}
                    <Nav>
                        {user?.displayName && <Nav.Link >{user?.displayName}</Nav.Link>}
                        {
                            user?.email ?
                                <Button variant="dark" onClick={logOut}>Logout</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Nav.Link eventKey={2} href="#memes">
                            {
                                user?.photoURL ?
                                    <div className='text-white' onMouseOver={() => setOpen(user?.displayName)} onMouseOut={() => setOpen(user?.photoURL)}>
                                        <Image style={{ height: '40px' }} roundedCircle
                                            src={
                                                open === user?.photoURL
                                                    ?
                                                    user?.photoURL
                                                    :
                                                    user?.displayName
                                            }>

                                        </Image>
                                    </div>


                                    : <FaUser></FaUser>
                            }
                        </Nav.Link>

                        {/* toggle dark/light mode  */}
                        <div>
                            <input type="checkbox" onClick={handleToggle} className="btn-check" id="btn-check-outlined" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">{!dark ? 'Dark' : 'Light'}</label>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;