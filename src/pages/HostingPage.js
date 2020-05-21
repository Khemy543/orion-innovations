import React from "react";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";


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
      <IndexNavbar />
        
        <div className="main">
        <div className="section section-contact-us text-center" 
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.88),rgba(0, 0, 0, 0.88)), url(" + require("../assets/img/header2.jpg") + ") no-repeat fixed",
          backgroundSize: "cover", width:"100%", height:"100vh"
          
        }}
        data-parallax={true}  
        >
        <div className="filter" />
        <h2 className="sub-title" data-aos='fade-left' style={{marginTop:"18%", color:"white"}}>
          COMING SOON!
        </h2>
        </div>
            
        </div>
    </div>
  );
}
export default HostingPage;