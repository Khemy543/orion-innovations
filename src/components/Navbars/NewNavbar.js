
import React from "react";
//import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import { Link } from "react-router-dom";
import classnames from "classnames";



// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function NavBar() {
  const [navbarColor, setNavbarColor] = React.useState("");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
      color="info"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            
          >
          <Link to="/">
            
            <img alt="#" src={require("../../assets/img/KHM.png")} 
            style={{maxWidth:"40px", height:"auto", marginTop:"-5px",marginRight:"8px"}}
            />
            Orion Innovations
            </Link>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
        <Nav navbar>
        <NavItem>
        <Link
            style={{textDecoration:"none"}}
            to="/"
            >
          <NavLink>
            
            Home
            
          </NavLink>
          </Link>
        </NavItem>
        <NavItem>
        <Link
            style={{textDecoration:"none"}}
            to = "/about-us">
          <NavLink>
          
            About Us
            
          </NavLink>
          </Link>
        </NavItem>
        <NavItem>
        <Link
            style={{textDecoration:"none"}}
            to="/services"
            >
          <NavLink>
          
            Services
           
          </NavLink>
          </Link>
        </NavItem>
        <NavItem>
        <Link
            style={{textDecoration:"none"}}
            to="/hosting"
            >
          <NavLink>
          
            Hosting
           
          </NavLink>
          </Link>
        </NavItem>
        
        
       
      </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
