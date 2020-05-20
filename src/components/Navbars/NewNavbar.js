import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  UncontrolledTooltip,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
 
} from "reactstrap";

function NewNavbar() {
  
  const [collapseOpen, setCollapseOpen] = React.useState(false);
 
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
      <Navbar className={"fixed-top "} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
            >
              Orion Innovations
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Best place to get satisfied
            </UncontrolledTooltip>
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

export default NewNavbar;
