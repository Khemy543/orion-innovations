import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
// sections for this page


function LandingPage() {
    
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
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
        
        </div> 
        <div className="section section-contact-us text-center">
          <Container>
          <h4 className="sub-title">WEB DESIGN COMPANY | WEB DEVELOPMENT | WEB MAINTENANCE</h4>
          <h2 className="title">TOP CLASS WEB DESIGN AND MAINTENANCE COMPANY AND DIGITAL MARKETING</h2>
          <p  style={{color:"black", fontWeight:"inherit"}}>
          Orion Innovations is a start-up organization that aims to provide website designs and services to clients and companies all over the world. We at Orion Innovations are positive that anyone who leverages on our business will remain happy and interested.
          Orion Innovations is a start-up organization that aims to provide website designs and services to clients and companies all over the world. We at Orion Innovations are positive that anyone who leverages on our business will remain happy and interested.
          Orion Innovations is a start-up organization that aims to provide website designs and services to clients and companies all over the world. We at Orion Innovations are positive that anyone who leverages on our business will remain happy and intere
          </p>
            </Container>
          </div>

        <div className="section section-contact-us text-center"
        style={{
          marginTop:"-90px"
        }}
        >
          <Container>
            <Row>
              <Col md="4">
                  <div>
                    <img src={require("../assets/img/services/service7.jpg")}
                      style={{
                        maxWidth:"250px",
                        height:"auto"
                      }}
                    />
                    <div className="description" style={{marginTop:"-50px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Website Design</h4>
                    <p style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    
                  </div>
                    </div>
              </Col>
              <Col md="4">
              <div>
                    <img src={require("../assets/img/services/service4.png")}
                    style={{
                        maxWidth:"250px",
                        height:"auto"
                      }}
                    />
                    <div className="description" style={{marginTop:"-50px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Website Hosting</h4>
                    <p style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}> 
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    
                  </div>
                    </div>
              </Col>
              <Col md="4">
              <div>
                    <img src={require("../assets/img/services/service5.png")}
                    style={{
                        maxWidth:"250px",
                        height:"auto"
                      }}
                    />
                    <div className="description" style={{marginTop:"-50px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Website Marketing</h4>
                    <p style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    
                  </div>
                    </div>
              </Col>
              
              </Row>
              <Row>
              <Col md="4">
              <div>
                    <img src={require("../assets/img/services/service2.png")}
                    style={{
                        maxWidth:"250px",
                        height:"auto"
                      }}
                    />
                    <div className="description" style={{marginTop:"-50px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Website Upgrades and Renovations</h4>
                    <p style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    
                  </div>
                    </div>
              </Col>
              
              <Col md="4">
              <div>
                    <img src={require("../assets/img/services/service3.png")}
                    style={{
                        maxWidth:"250px",
                        height:"auto"
                      }}
                    />
                    <div className="description" style={{marginTop:"-50px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Graphic designs and Photography</h4>
                    <p style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    
                  </div>
                    </div>
              </Col>
              <Col md="4">
              <div>
                    <img src={require("../assets/img/services/service2.png")}
                    style={{
                        maxWidth:"250px",
                        height:"auto"
                      }}
                    />
                    <div className="description" style={{marginTop:"-50px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Website Maintenance</h4>
                    <p style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    
                  </div>
                    </div>
              </Col>
              
              </Row>
              
            </Container>
        </div>
        <div className="section section-about-us"
        style={{
          marginTop:"-70px"

        }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                
                <h5>
                It’s not enough to have a good looking websites, your website should be a driving force of your business. A Real marketing tool which promotes your business online and drives customers to prominently view your website from any service they want.
                  
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/profile.jpg") + ")"
                    }}
                  >
                    
                  </div>
                  
                </Col>
                <Col md="6">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landing.jpg") + ")"
                    }}
                  ></div>
                 
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div className="section section-contact-us text-center"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.88),rgba(0, 0, 0, 0.88)), url(" + require("../assets/img/header2.jpg") + ") no-repeat fixed",
          backgroundSize: "cover"
          
        }}
        data-parallax={true}  
        >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h3 style={{color:"white"}}>Move your company to the next level</h3>
            <h3 style={{color:"white", fontSize:"50px", fontWeight:"500"}}>Website Design & Other design works</h3>
            <p style={{color:"white"}}>Personalised customer service. We provide highly qualified and skilled trades personnel</p>
            </div>
            <br />
            <a
            activeClass="active"
                to="contact-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                style={{fontWeight:"600"}}
            >
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              REQUEST A CALLBACK
            </Button>
            </a>
            </Container>
        </div>      
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Contact Us</h2>
            <p className="description">Your project is very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                  ></Input>
                </InputGroup>
                <InputGroup
                  
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    
                    size="lg"
                  >
                    Send Message
                  </Button>
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

export default LandingPage;
