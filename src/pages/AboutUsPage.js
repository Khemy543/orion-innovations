import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import NewNavbar from "components/Navbars/NewNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import {
    
    Container,
    Progress,
    Row,
    Col,
    Button,
    UncontrolledTooltip
   
  } from "reactstrap";

//Helmet
import { Helmet } from "react-helmet";


function AboutUsPage() {
   
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
      <Helmet>
        <title>About Us | Orion Innovations Limited</title>
      </Helmet>
      <NewNavbar />
        
        <div className="main" style={{marginTop:"20px"}}>
        <div className="section section-about-us text-center" >
            <Container>
            <h3 className="sub-title"  data-aos='zoom-in'>About US</h3>
            <p  data-aos='fade-right' style={{color:"black", fontWeight:"500"}}>
            Orion Innovations is a start-up organization offering web and internet services to institutions and companies of all kinds. We offer services in website designing, development, hosting, marketing, maintenance and analysis. 
We have ventured into the web-service industry to offer superior and unique services to companies. Our experience and expertise in web designs and web sales give us a backing to provide solutions that are currently lacking in the market.
The high costs of the projects and the focus on bigger companies and institutions could be
the contributing factor as to why this market remains untapped. We have a system that will reduce the project costs dramatically giving us the opportunity to offer quality services at reduced costs.
<br/>
We at Orion Innovations have been able to conduct thorough market research and feasibility studies and we came to the conclusion that Accra is the right place to start our company. We at Orion believe that our client’s best interest would always be our utmost priority, and all our activities will be guided by our values and professional ethics. We also hope to hire professionals who are well experienced in the software development industry. We at Orion plan to be open for 24 hours in a day from Mondays to Sundays in order for us to provide the best services in the industry.
We have prepared this business plan to highlight some of the aspects of our business and
systems. It details the market demands and growth, and outlines the projected profit margins and
cash flow over the next three years.

            </p>
            </Container>
        </div>
        <div className="section section-progress text-center" >
          <Container>
            <div style={{marginTop:"-140px"}}>
            <div  data-aos='fade-right'>
              <p style={{textAlign:'left'}}>React</p>
          <Progress value="95" style={{height:"10px", width:"80%"}}/>
          </div>
          <br/>
          <div  data-aos='fade-right'>
              <p style={{textAlign:'left'}}>CSS</p>
          <Progress value="75" style={{height:"10px", width:"80%"}}/>
          </div>
          <br/>
          <div  data-aos='fade-right'>
              <p style={{textAlign:'left'}}>HTML</p>
          <Progress value="80" style={{height:"10px", width:"80%"}}/>
          </div>
          <br/>
          <div  data-aos='fade-right'>
              <p style={{textAlign:'left'}}>JavaScript</p>
          <Progress value="85" style={{height:"10px", width:"80%"}}/>
          </div>
          </div>
            </Container>
          </div>

          <div className="section section-contact-us text-center" 
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.88),rgba(0, 0, 0, 0.88)), url(" + require("../assets/img/request.jpg") + ") no-repeat fixed",
          backgroundSize: "cover"
          
        }}
        data-parallax={true}  
        >
        <div className="filter" />
        <h3 style={{color:"white"}}>We love what we do</h3>
        <h2 style={{color:"white"}}>Your Project is very inmportant to us!</h2>
        <h3 style={{color:"white"}}>Move your Business to the next level</h3>
        </div>
        
        
          
            
        </div>
        <DarkFooter />
    </div>
  );
}
export default AboutUsPage;