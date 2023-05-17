import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function navbar() {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      sticky="top"
      className="h-15 shadow-sm dark:border-gray-700"
    >
      <Container>
        <Navbar.Brand href="/">Bryan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">首頁</Nav.Link>
            <Nav.Link href="about/">關於Bryan</Nav.Link>
            <NavDropdown title="專案作品" id="basic-nav-dropdown">
              <NavDropdown.Item href="projects/">網頁作品集</NavDropdown.Item>
              <NavDropdown.Item href="projects/">區塊鏈作品集</NavDropdown.Item>
              <NavDropdown.Item href="projects/">其他作品集</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact/">聯絡Bryan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
