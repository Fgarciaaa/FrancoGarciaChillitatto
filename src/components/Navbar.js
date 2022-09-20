import { Container, Nav, Navbar as BNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <BNavbar bg="primary" variant="dark">
        <Container>
          <BNavbar.Brand as={Link} to="/">
            Tienda Chilli-Funko
          </BNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/hp">
              Harry Potter
            </Nav.Link>
            <Nav.Link as={Link} to="/category/st">
              Stranger Things
            </Nav.Link>
            <Nav.Link as={Link} to="/category/vf">
              Volver al futuro
            </Nav.Link>
          </Nav>
        </Container>
      </BNavbar>
    </>
  );
}

export default Navbar;
