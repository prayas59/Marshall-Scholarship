import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Scholarships/Courses";

function App() {
  return (
    <div>
      <Navbar expand="lg" className="position-absolute w-100">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="#dc3545"
                class="bi bi-backpack-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z" />
                <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5" />
              </svg>{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Link to="/" className="nav-link text-uppercase">
                Home
              </Link>
              <Link to="/scholarships" className="nav-link text-uppercase">
                Our Scholarships
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scholarships" element={<Courses />} />
      </Routes>

      <footer className="bg-body-tertiary">
        <div className="bg-body-tertiary container my-5">
          <div className=" bg-body-tertiary row d-flex justify-content-between align-items-center">
            <div className="col-md-7 col-lg-6">
              <div className="d-row d-md-flex justify-content-between align-items-center">
                <div className="col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0">
                  <ul className="footer-navigation items-center list-unstyled mb-0">
                    <Link to="/" className="text-decoration-none text-danger">
                      <li className="text-uppercase fw-semibold">Home</li>
                    </Link>
                    <Link
                      to="/scholarships"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">
                        Our Scholarships
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-tertiary">
          <div className="container">
            <p className="p-3 m-0 text-center">
              copyright 2024 @ made by Marshall
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
