import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const linkLogo = {
    color: "#232129",
    fontSize: 22,
    textDecoration: "none",
    fontWeight: "bold",
}

const linkNav = {
    color: "#232129",
    textDecoration: "none",
    fontWeight: "500",
}

const Header = ({title}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark"   fixed="top">
            <Container>
                <Navbar.Brand><Link style={linkLogo} to="/">{title}</Link></Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link style={linkNav} to="/hello">Bài Viết</Link></Nav.Link>
                        <Nav.Link><Link style={linkNav} to="/about">About</Link></Nav.Link>
                        
                        <NavDropdown style={linkNav} title="Luật tố tụng" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown style={linkNav} title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Đăng nhập</Nav.Link>
                        <Nav.Link eventKey={2} href="tel: 0933943686">
                        0933.943.686
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header