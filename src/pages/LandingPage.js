import React,{useState}from "react";


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
    Col,
    Form,
    Modal,
    Spinner
  } from "reactstrap";

//axios
import axios from "axios";

//Cookies
import { useCookies } from 'react-cookie';
import CookieConsent from "react-cookie-consent";

axios.defaults.withCredentials = true;
//axios.defaults.headers.common['Auth-Token'] = 'foo bar';
const config = {
  withCredentials: true, 
  headers : {
  "Access-Control-Allow-Origin":"*",
  "Content-Type": "application/json",
  "Access-Control-Request-Headers":"authorization",
  },

};



function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertpop, setAlertpop] = useState(false);
  const [modal, setModal] = useState(false);
  const [cookies, setCookie] = useCookies(['name']);

  const toggle =() => setModal(!modal);

  //handle submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e);
     
  axios.post('https://salty-anchorage-79079.herokuapp.com/api/v1/post-message', {
    config, name, email, message
  }).then(res => {
    console.log(res);
    if (res.data.status === 200){
      setAlertpop(true)
      setEmail('');
      setName('');
      setMessage('');
    }
    else{
  
    }
     
  }) 
  
  }
    
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    
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
        <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieName1"
        style={{ background: "rgb(44, 168, 255)" }}
        buttonStyle={{ backgroundColor:"rgb(44, 168, 255)", color: "white", fontSize: "13px" , borderRadius:"4px", border:"1px solid white"}}
        expires={150000}
    >
    This website uses cookies to ensure you get the best experience on our website.{" "}
    <div>
    <a href ="#!" style={{ fontSize: "12px",fontWeight:"500" }}>
    Learn more
    </a>
    </div>
    
    </CookieConsent>
        </div> 
        <div className="section section-contact-us text-center">
          <Container>
          <h4 className="sub-title">WEB DESIGN COMPANY | WEB DEVELOPMENT | WEB MAINTENANCE</h4>
          <h2 className="title">TOP CLASS WEB DESIGN AND MAINTENANCE COMPANY AND DIGITAL MARKETING</h2>
          <p  style={{color:"black", fontWeight:"inherit"}} >
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
                  <div data-aos='fade-right'>
                    <img alt="#" src={require("../assets/img/services/service7.jpg")}
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
              <div data-aos='fade-down'>
                    <img alt="#" src={require("../assets/img/services/service4.png")}
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
              <div data-aos='fade-left'>
                    <img alt="#" src={require("../assets/img/services/service5.png")}
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
              <div data-aos='fade-right'>
                    <img alt="#" src={require("../assets/img/services/service3.png")}
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
              <div data-aos='fade-up'>
                    <img alt="#" src={require("../assets/img/services/service2.png")}
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
              <Col md="4">
              <div data-aos='fade-left'>
                    <img alt="#" src={require("../assets/img/services/service9.png")}
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
                
                <h5 data-aos='fade-down'>
                It’s not enough to have a good looking websites, your website should be a driving force of your business. A Real marketing tool which promotes your business online and drives customers to prominently view your website from any service they want.
                  
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div data-aos='fade-right'
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/profile.jpg") + ")"
                    }}
                  >
                    
                  </div>
                  
                </Col>
                <Col md="6">
                  <div data-aos='fade-left'
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
          background: "linear-gradient(rgba(0, 0, 0, 0.83),rgba(0, 0, 0, 0.83)), url(" + require("../assets/img/header2.jpg") + ") no-repeat fixed",
          backgroundSize: "cover"
          
        }}
         
        >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h3 style={{color:"white"}}>Move your company to the next level</h3>
            <h3 style={{color:"white", fontSize:"50px", fontWeight:"500"}}>Website Design & Other design works</h3>
            <p style={{color:"white"}}>Personalised customer service. We provide highly qualified and skilled trades personnel</p>
            </div>
            <br />
            <div>
           <i className="fa fa-linkedin mr-3 fa-2x" style={{color:"#0976b4"}}/>
           <i className="fa fa-google-plus mr-3 fa-2x"style={{color:"#dd4b39"}}/>
           <i className="fa fa-twitter mr-3 fa-2x" style={{color:"#55acee"}}/>
           <i className="fa fa-instagram mr-3 fa-2x"style={{color:"#3f729b"}}/>
           </div>
            </Container>
        </div>      
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Contact Us</h2>
            <p className="description">
            <p class="description" ><i className="fa fa-phone" style={{marginRight:"15px"}}/>+233-542161579 / +233-552480391</p>   
                      <p class="description"><i className="fa fa-envelope" style={{marginRight:"15px"}}/>orioninnovations14@gmail.com</p> 
                      
            </p>
            <Row>
            <Col className="text-center ml-auto mr-auto" lg="6" md="8" data-aos="fade-left">
            <Form onSubmit={handleSubmit}>
              <InputGroup
                className={
                  "input-lg" + (firstFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="First Name..."
                  type="text"
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                  name="name"
                  value={name}
                  onChange={
                    e => {setName(e.target.value)
                    setCookie('name', e.target.value, { path: '/' });}}
                ></Input>
              </InputGroup>
              <InputGroup
                className={
                  "input-lg" + (lastFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email..."
                  type="text"
                  onFocus={() => setLastFocus(true)}
                  onBlur={() => setLastFocus(false)}
                  value={email}
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                ></Input>
              </InputGroup>
              <div className="textarea-container">
                <Input
                  cols="80"
                  placeholder="Type a message..."
                  rows="4"
                  type="textarea"
                  name="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></Input>
              </div>
              <div className="send-button">
                <Button
                  block
                  className="btn-round"
                  color="info"
                  type="submit"
                  onClick={toggle}
                  disabled={!name||!email||!message}
                  size="lg"
                >
                  Send Message
                </Button>
                <Modal id="modal" isOpen={modal} toggle={toggle} style={{
                        width:"200px" ,
                        marginTop:"10%",
                         
                      }}>
                      
                      <div style={{alignContent:"center"}}>
                      {!alertpop?
                        <Spinner color="primary" style={{marginTop:"50px", marginRight:"50px", marginLeft:"80px", marginBottom:"50px"}}/>
                        :
                        <div>
                        <i className="fa fa-check-circle" style={{fontSize:"56px",color:"rgba(1, 137, 254, 0.9)",marginTop:"50px", marginRight:"50px", marginLeft:"80px", marginBottom:"50px"}}></i>
                        {console.log(cookies.name) }
                        </div>
                      }
                      
                      </div>
                      </Modal>
              </div>
              </Form>
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
