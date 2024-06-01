import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../assets/NavBar.css";
import Logo from "./Logo";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="gap-4 px-3">
      <Navbar.Brand href="#home" className="navbar-brand">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="flex-grow-1 justify-content-evenly"
      >
        <Nav className="flex-grow-1 justify-content-evenly">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Nav.Link className="navbar-home">Home</Nav.Link>
          </Link>

          <Link
            activeClass="active"
            to="Rewards"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Nav.Link className="navbar-rewards"> Rewards</Nav.Link>
          </Link>

          <Link
            activeClass="active"
            to="timeline"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            <Nav.Link className="navbar-timeline">Timeline</Nav.Link>
          </Link>

          <Link
            activeClass="active"
            to="register"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Nav.Link className="navbar-guidelines">Guidelines</Nav.Link>
          </Link>

          <Link
            activeClass="active"
            // Needs to be changed
            to="faqs"
            // Needs to be changed
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Nav.Link className="navbar-faqs">Faqs</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
