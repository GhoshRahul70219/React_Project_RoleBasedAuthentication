import {Link} from "react-router-dom";
import React, {useState} from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    const [navSelected, setNavSelected] = useState('home')


    return (
        <Navbar bg="dark" data-bs-theme="primary">
            <Container>
                <Navbar.Brand href="/">
                    <span className="text-white fw-bold">
                        React_Project_RoleBasedAuthentication
                    </span>
                </Navbar.Brand>
                <Nav className="me-auto ms-5">
                    <Nav.Link className={`mx-1 ${navSelected === 'home' ? 'active fw-bold' : ''}`}>
                        <Link to="/" onClick={() => setNavSelected('home')}>Home</Link>
                    </Nav.Link>
                    <Nav.Link className={`mx-1 ${navSelected === 'user' ? 'active fw-bold' : ''}`}>
                        <Link to="/user" onClick={() => setNavSelected('user')}>Users</Link>
                    </Nav.Link>
                    <Nav.Link className={`mx-1 ${navSelected === 'role' ? 'active fw-bold' : ''}`}>
                        <Link to="/role" onClick={() => setNavSelected('role')}>Roles</Link>
                    </Nav.Link>
                    <Nav.Link className={`mx-1 ${navSelected === 'permission' ? 'active fw-bold' : ''}`}>
                        <Link to="/permission" onClick={() => setNavSelected('permission')}>Permissions</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
