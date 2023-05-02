import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Bryan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">首頁</Nav.Link>
            <Nav.Link href="#home">關於Bryan</Nav.Link>
            <NavDropdown title="專案作品" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">網頁作品集</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                區塊鏈作品集
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">其他作品集</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#home">聯絡Bryan</Nav.Link>
            <Nav.Link href="#home">管理員登入</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
