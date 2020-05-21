import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
 
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <div>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
            data-placement="bottom"
            href="/"
            >
            
            <img alt="#" src= {require("../../assets/img/now-logo.png")}
            style={{maxWidth:"25px", height:"auto", marginTop:"-15px",marginRight:"5px"}}
            />
               Orion Innovations
            
            </NavbarBrand>
            
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink>
                  <Link
                  style={{textDecoration:"none"}}
                  to="/"
                  >
                  Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link
                  style={{textDecoration:"none"}}
                  to = "/about-us">
                  About Us
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link
                  style={{textDecoration:"none"}}
                  to="/services"
                  >
                  Services
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link
                  style={{textDecoration:"none"}}
                  to="/hosting"
                  >
                  Hosting
                  </Link>
                </NavLink>
              </NavItem>
              
              
             
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default IndexNavbar;
