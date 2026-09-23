import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-color">
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-center">
            <div className="nav-links">
              <Nav.Link href="#" className="nav-link-custom"><b>Home</b></Nav.Link>
              <Nav.Link href="#" className="nav-link-custom"><b>Products</b></Nav.Link>
              <Nav.Link href="#" className="nav-link-custom"><b>Categories</b></Nav.Link>
              <Nav.Link href="#" className="nav-link-custom"><b>About</b></Nav.Link>
              <Nav.Link href="#" className="nav-link-custom"><b>Contact</b></Nav.Link>
            </div>
          </Nav>

          <div className="d-flex align-items-center gap-3 pe-3">
            <button type="button" className="btn p-0 border-0 shadow-none">
              <img src="/search.svg" alt="Search" width="20" height="20" />
            </button>
            <button type="button" className="btn p-0 border-0 shadow-none">
              <img src="/cart.svg" alt="Cart" width="22" height="22" />
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
