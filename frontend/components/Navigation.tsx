import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
        Dice Roller
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Hjem</Nav.Link>
          <Nav.Link href="/oppskrifter">Oppskrifter</Nav.Link>
          <Nav.Link href="/ingredienser">Ingredienser</Nav.Link>
          <Nav.Link href="/omoss">Om Oss</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
