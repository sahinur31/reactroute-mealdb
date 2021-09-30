import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Meals from '../Meals/Meals';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">TheMealDB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">
                            <NavLink to="/home">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link href="/meals">
                            <NavLink to="/meals">Meals</NavLink>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <h2>MealDB Home Page</h2>
                {/* <Meals></Meals> */}
        </div>
    );
};

export default Header;