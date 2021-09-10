import React from 'react';
import { Navbar,Container, Nav  } from 'react-bootstrap';
export function Header() {
    return (
        <>
            {/* <header> */}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Maxos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="#link">Assets</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* </header> */}
        </>
    )
}