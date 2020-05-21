import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import CarouselView from "components/Carousel/Carousel.js";
import {
 
    Container,
    Row,
    Col
   
  } from "reactstrap";

  //helmet
  import { Helmet } from "react-helmet";


function ServicePage() {
   
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
      <Helmet>
        <title>Services | Orion Innovations Limited</title>
      </Helmet>
        <div className="main">
          <CarouselView/>
        <div className="section section-contact-us text-center">
            <Container>
            <Row>
              <Col md="4">
              <div data-aos='fade-right'>
                <img alt="#" src={require("../assets/img/services/service3.png")}
                style={{
                        maxWidth:"250px",
                        height:"auto",
                        marginTop:"-10px"
                      }}
                />
                <h4 style={{color:"black", fontWeight:"500", marginTop:"-20px"}}>Website Design</h4>
                </div>
              </Col>
              
              <Col md="8">
              <p style={{
                marginTop:"20px" , paddingLeft:"60px", borderLeft:"2px solid #00000036"
              }}
              data-aos='fade-left'
              >
              Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
              </p>
              </Col>
              </Row>
              <Row>
              
              <Col md="8">
              <p style={{
                marginTop:"20px" , paddingRight:"60px", borderRight:"2px solid #00000036"
              }}
              data-aos='fade-right'
              >
              Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
              </p>
              </Col>
              <Col md="4">
              <div data-aos='fade-left'>
                <img alt="#" src={require("../assets/img/services/service4.png")}
                style={{
                        maxWidth:"250px",
                        height:"auto",
                        marginTop:"-10px"
                      }}
                />
                <h4 style={{color:"black", fontWeight:"500", marginTop:"-20px"}}>Website Hosting</h4>
                </div>
              </Col>
              
              </Row>
              <Row>
              <Col md="4">
              <div  data-aos='fade-right'>
                <img alt="#" src={require("../assets/img/services/service5.png")}
                style={{
                        maxWidth:"250px",
                        height:"auto",
                        marginTop:"-10px"
                      }}
                />
                <h4 style={{color:"black", fontWeight:"500", marginTop:"-20px"}}>Website Marketing</h4>
                </div>
              </Col>
              
              <Col md="8">
              <p style={{
                marginTop:"20px" , paddingLeft:"60px", borderLeft:"2px solid #00000036"
              }}
              data-aos='fade-left'
              >
              Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
              </p>
              </Col>
              </Row>
              <Row>
                           
              <Col md="8">
              <p style={{
                marginTop:"20px" , paddingRight:"60px", borderRight:"2px solid #00000036"
              }}
              data-aos='fade-right'
              >
              Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
              </p>
              </Col>
              <Col md="4">
              <div  data-aos='fade-left'>
                <img alt="#" src={require("../assets/img/services/service3.png")}
                style={{
                        maxWidth:"250px",
                        height:"auto",
                        marginTop:"-10px"
                      }}
                />
                <h4 style={{color:"black", fontWeight:"500", marginTop:"-20px"}}>Website Renovation and Upgrades</h4>
              </div>
              </Col>
 
              </Row>
              <Row>
              <Col md="4">
              <div  data-aos='fade-right'>
                <img alt="#" src={require("../assets/img/services/service2.png")}
                style={{
                        maxWidth:"250px",
                        height:"auto",
                        marginTop:"-10px"
                      }}
                />
                <h4 style={{color:"black", fontWeight:"500", marginTop:"-20px"}}>Website Maintenance</h4>
              </div>
              </Col>
              
              <Col md="8">
              <p style={{
                marginTop:"20px" , paddingLeft:"60px", borderLeft:"2px solid #00000036"
              }}
              data-aos='fade-left'
              >
              Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
              </p>
              </Col>
              </Row>
              <Row>
              
              <Col md="8">
              
              <p style={{
                marginTop:"20px" , paddingRight:"60px", borderRight:"2px solid #00000036"
              }}
              data-aos='fade-right'
              >
              Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
              </p>
              </Col>
              <Col md="4">
              <div  data-aos='fade-left'>
                <img alt="#" src={require("../assets/img/services/service9.png")}
                style={{
                        maxWidth:"250px",
                        height:"auto",
                        marginTop:"-10px"
                      }}
                />
                <h4 style={{color:"black", fontWeight:"500", marginTop:"-20px"}}>Graphic Design and Photography</h4>
              </div>
              </Col>
              
              </Row>
            </Container>
        </div>
            
        </div>
        <DarkFooter />
    </div>
  );
}
export default ServicePage;