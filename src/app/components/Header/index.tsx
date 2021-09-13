import React from 'react';
import { Navbar,Container, Nav  } from 'react-bootstrap';
export function Header() {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img src="https://assets.website-files.com/60994c647265c8170c7f6576/609d518beea2436b274cf1c7_Maxos_Logo-White.svg" loading="eager" width="126" alt="" className="logo-nav"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="assets">Assets</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}