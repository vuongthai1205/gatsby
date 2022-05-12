import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import slug from "slug";

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

const Header = (props) => {
    const { edges } = props;
    let tags = [];
    let categories = [];

    edges.forEach(({ node }) => {
        tags = Array.from(new Set([...tags, ...node.frontmatter.tags]));
        categories = Array.from(
        new Set([...categories, ...node.frontmatter.categories])
        );
    });
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark"   fixed="top">
            <Container>
                <Navbar.Brand><Link style={linkLogo} to="/">Luật Thái Gia</Link></Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link style={linkNav} to="/hello">Bài Viết</Link></Nav.Link>
                        <Nav.Link><Link style={linkNav} to="/about">About</Link></Nav.Link>
                        {categories.map((category, index) => (
                        <NavDropdown key={index} title={category} id="collasible-nav-dropdown">
                            {tags.map((tag, index) => (
                                <span key={index}>
                                    <NavDropdown.Item href={`/tag/${slug(tag).toLowerCase()}/`}>{tag}</NavDropdown.Item>{" "}
                                </span>
                                ))}
                        </NavDropdown>
                        ))}
                        
                        <NavDropdown title="Sở hữu trí tuệ" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Bản quyền tác giả</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Nhãn hiệu hàng hóa</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Sáng chế / giải pháp hữu ích</NavDropdown.Item>
                            
                            <NavDropdown.Item href="#action/3.4">Kiểu dáng công nghiệp</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Xử lý vi phạm quyền sở hữu công nghiệp</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Doanh nghiệp" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Đăng ký thay đổi NP doanh nghiệp</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Tư vấn nội bộ doanh nghiệp</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Tư vấn pháp lý thường xuyên</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Lĩnh vực đầu tư" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Đăng ký đầu tư</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Điều chỉnh giấy phép đầu tư</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Đăng ký đầu tư ra NN</NavDropdown.Item>
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