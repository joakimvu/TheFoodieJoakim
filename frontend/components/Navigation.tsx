import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <Navbar
      className="px-4 py-2"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="/">
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
        <span className="badge bg-success">TFJ</span> The Foodie Joakim
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Hjem</Nav.Link>
          <Nav.Link href="/oppskrifter">Oppskrifter</Nav.Link>
          {/* <Nav.Link href="/ingredienser">Ingredienser</Nav.Link> */}
          {/* <Nav.Link href="/ingredienser">Mitt kjøkkenutstyr</Nav.Link> */}
          <Nav.Link href="/omoss">Om Meg</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
