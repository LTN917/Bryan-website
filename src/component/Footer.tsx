//https://react-bootstrap.github.io/components/navbar/
//https://www.dhairyashah.dev/posts/how-to-use-icons-in-nextjs/

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { TbSquareLetterC } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";

export default function Footer() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/contact">
          <VscAccount />
        </Navbar.Brand>
        <Nav className="me-auto" style={containerStyle}>
          <Nav.Link href="https://www.facebook.com/profile.php?id=100006097394081&sk=about">
            <BsFacebook />
          </Nav.Link>
          <Nav.Link href="https://github.com/LTN917">
            <BsGithub />
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/ltnisgod/">
            <AiFillInstagram />
          </Nav.Link>
          <Nav.Link href="https://tw.coderbridge.com/@lcl25k10">
            <TbSquareLetterC />
          </Nav.Link>
          <Nav.Link href="/contact">
            <SiGmail />
          </Nav.Link>
          <Nav.Link href="/contact">
            <AiFillPhone />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
