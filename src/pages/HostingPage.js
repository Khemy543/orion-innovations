import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import NewNavbar from "components/Navbars/NewNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import {
    Container
  } from "reactstrap";
// sections for this page


function HostingPage() {
    
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <div>
      <NewNavbar />
        
        <div className="main" style={{marginTop:"70px"}}>
        <div className="section section-contact-us text-center">
            <Container>
            <h2 className="title">Hello Hosting page</h2>
            </Container>
        </div>
            
        </div>
        <DarkFooter />
    </div>
  );
}
export default HostingPage;