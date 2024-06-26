import React,{useState}from "react";

import Slider from "react-slick";

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
    Spinner, 
    UncontrolledTooltip,
    Card, CardBody, CardTitle, CardText
  } from "reactstrap";

//axios
import axios from "axios";

//helmet
import { Helmet } from "react-helmet";
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

  // Slide settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive:[
      {
        breakpoint:450,
        settings:{
            centerMode:true,
            slidesToShow:1
        }
      }
    ]
  };
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
      <Helmet>
      <title>Home | Orion Innovations Limited</title>
        </Helmet>
        <div>
        <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieName07"
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
     
      <IndexHeader />
      <div className="section">
      <IndexNavbar />
        <Container>
          <Row>
        <div className="section section-contact-us text-center" style={{marginTop:"-70px"}}>
          
          {/* <h4 className="sub-title">WEB DESIGN | WEB UPGRADES AND RENOVATIONS | WEB HOSTING</h4> */}
          <h3 className="title">WEB DESIGN | WEB UPGRADES AND RENOVATIONS | WEB HOSTING</h3>
          <p  style={{color:"black", fontWeight:"inherit"}} >
          Orion Innovations is a start-up organization offering web and internet services to institutions and companies of all kinds. We offer services in website designing, development, hosting, marketing, maintenance and analysis. 
          We have ventured into the web-service industry to offer superior and unique services to companies. Our experience and expertise in web designs and web sales give us a backing to provide solutions that are currently lacking in the market.
          We at Orion Innovations are positive that anyone who leverages on our business will remain happy and interested.
          </p>
            
          </div>
          </Row>
         <Row className="text-center">
              <Col md="4" >
                  <div  data-aos="slide-right" data-aos-delay="400">
                    <img alt="#" src={require("../assets/img/services/service7.jpg")}
                     
                      className="zoom"
                    />
                    <div className="description" style={{marginTop:"-30px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Website Design</h4>
                    <p className="sub-title" style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}>
                    Innovative, Aesthetic, Well-thought out designs to convey the uniqueness of your company to your future customers.
                    </p>
                    
                  </div>
                    </div>
              </Col>

              <Col md="4">
              <div data-aos="slide-right" data-aos-delay="400">
                    <img alt="#" src={require("../assets/img/services/service3.png")}
                   
                      className="zoom"
                    />
                    <div className="description" style={{marginTop:"-30px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Website Upgrades and Renovations</h4>
                    <p className="sub-title" style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}>
                      We give a facelift to your existing websites
                    </p>
                    
                  </div>
                    </div>
              </Col>
             
              <Col md="4">
              <div data-aos="slide-right" data-aos-delay="200" >
                    <img alt="#" src={require("../assets/img/services/service4.png")}
                    
                       className="zoom"
                    />
                    <div className="description" style={{marginTop:"-30px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Website Hosting</h4>
                    <p className="sub-title" style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}> 
                    All your needs met in one request. We don’t only design your website, we provide hosting services as well. 
                    </p>
                    
                  </div>
                    </div>
              </Col>
              
              
              </Row>
             {/*  <Row className='text-center'>
              
              
              <Col md="4">
              <div data-aos="slide-right" data-aos-delay="200">
                    <img alt="#" src={require("../assets/img/services/service2.png")}
                   
                      className="zoom"
                    />
                    <div className="description" style={{marginTop:"-50px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Website Maintenance</h4>
                    <p className="sub-title" style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}>
                      Regular house cleaning for problems that may arise on your website and keep it up to date for a smooth running business
                    </p>
                    
                  </div>
                    </div>
             
              </Col>
              <Col md="4">
              <div data-aos="slide-right">
                    <img alt="#" src={require("../assets/img/services/service9.png")}
                   
                      className="zoom"
                    />
                    <div className="description" style={{marginTop:"-30px"}}>
                    <h4 style={{color:"black", fontWeight:"500"}}>Graphic designs and Photography</h4>
                    <p className="sub-title" style={{color:"rgba(0, 0, 0, 0.62)", fontWeight:"500"}}>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    
                  </div>
                    </div>
              </Col>

        </Row> */}


        <Row className="section-dark section-nucleo-icons" style={{backgroundColor:"rgb(11, 16, 17)"}}>
       
            <Col lg="6" md="12"  className="mt-2" data-aos="fade-right" data-aos-delay="200">
              <h2 className="sub-title" style={{color:"white"}}>Our Promises</h2>
              <br />
              <p className="description" style={{marginTop:"-30px"}}>
               <p><i className="fa fa-check-square-o" style={{marginRight:"10px"}}/>Beautiful Designs</p>
               <p style={{fontSize:"17px"}}>It all starts with a beautifully branded design that will help your business project a professional online image</p>
               <p><i className="fa fa-check-square-o" style={{marginRight:"10px"}}/>Latest Technology</p>
               <p style={{fontSize:"17px"}}>We use React Js for all our website designs with CSS3 sytling with latest React frameworks.</p>
               <p><i className="fa fa-check-square-o" style={{marginRight:"10px"}}/>Simple process</p>
               <p style={{fontSize:"17px"}}>At Orion Innovations, we like to keep things simple and clean. Your business and your time are our priority. We aim to make your experience of working with us as uncomplicated as possible. </p>
              </p>
             
             
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container" style={{marginTop:"30px"}}>
              <i className="fa fa-clock-o" data-aos="zoom-in" data-aos-delay="500" style={{color:"#0976b4"}}/>
              <i className="fa fa-cloud-download" data-aos="zoom-in"data-aos-delay="500" style={{color:"#dd4b39"}}/>
              <i className="fa fa-camera" data-aos="zoom-in"data-aos-delay="500" style={{color:"rgb(9, 180, 70)"}}/>
              <i className="fa fa-key" data-aos="zoom-in" data-aos-delay="500" style={{color:"rgb(9, 180, 70)"}}/>
              <i className="fa fa-address-card" data-aos="zoom-in" data-aos-delay="500" style={{color:"#55acee"}}/>
              <i className="fa fa-thumbs-o-up" style={{color:"white"}} data-aos="zoom-in" data-aos-delay="500"/>
              <i className="fa fa-lightbulb-o" data-aos="zoom-in" data-aos-delay="500" style={{color:"#0976b4"}}/>
              <i className="fa fa-heart-o" data-aos="zoom-in" data-aos-delay="500" style={{color:"#dd4b39"}}/>
              <i className="fa fa-balance-scale" data-aos="zoom-in" data-aos-delay="500" style={{color:"rgb(9, 180, 70)"}}/>
              <i className="fa fa-calendar-check-o" data-aos="zoom-in" data-aos-delay="500" style={{color:"rgb(249, 207, 0)"}}/>
              <i className="fa fa-commenting-o" data-aos="zoom-in" data-aos-delay="500" style={{color:"#0976b4"}} />
              <i className="fa fa-database" data-aos="zoom-in" data-aos-delay="500" style={{color:"#dd4b39"}}/>
              <i className="fa fa-desktop" data-aos="zoom-in" data-aos-delay="500" style={{color:"rgb(9, 180, 70)"}}/>
              <i className="fa fa-snowflake-o" data-aos="zoom-in" data-aos-delay="500" style={{color:"rgb(249, 207, 0)"}}/>
              <i className="fa fa-star-o" data-aos="zoom-in" data-aos-delay="500" style={{color:"rgb(249, 207, 0)"}}/>
              </div>
            </Col>
          
      </Row>
      

      
            {/* <Row style={{marginTop:"50px"}}>
              <Col className="ml-auto mr-auto text-center" md="8">
                
                <h5 >
                It’s not enough to have a good-looking website. Your website should be the driving force of your business. 
                A real marketing tool which promotes your business online and attracts traffic to your website for your future customers to be able to patronize your services.
                We want to help you achieve that.
                </h5>
              </Col>
            </Row> */}
            
            <div className="section-story-overview">
              <Row>

                <Col md="6">
                  <div 
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/profile.jpg") + ")"
                    }}
                    data-aos="zoom-in" data-aos-delay="100"
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
                    data-aos="zoom-in" data-aos-delay="200"
                  ></div>
                 
                </Col>
              </Row>
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
            {/* <p style={{color:"white"}}>Personalised customer service. We provide highly qualified and skilled trades personnel</p> */}
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
       
       
        <div  className= "section">
          <Row>
          <Col md="12" style={{overflowX:"hidden",overflowY:"hidden"}}>
        <Slider {...settings}>
        <div>
        <Col>
        <Card style={{maxWidth:"300px", border:"1px solid #f8f9fa",margin:"0px 0px 0px 0px", padding:"0px 0px 0px 0px"}}>
        
        <img alt="#" src={require("../assets/img/orion.png")} style={{borderRadius:"100%", width:"50px", height:"50px",
        marginTop:"10px", marginLeft:"15px"
        }}/>
        <CardBody>

        <CardTitle style={{fontWeight:"bold",height:"30px"}}>C.E.O Orion Innovations</CardTitle>
        <CardText style={{fontSize:"14px"}}>
        Great work with beautiful color matching. I didnt know website could be delivered this quick.
        </CardText>
        </CardBody>
      </Card>
      </Col>
        </div>
        <div>
          <Col>
        <Card style={{maxWidth:"300px", border:"1px solid #f8f9fa",margin:"0px 0px 0px 0px", padding:"0px 0px 0px 0px"}}>
        
        <img alt="#" src={require("../assets/img/aka.PNG")} style={{ width:"80px", height:"50px",
        marginTop:"10px"
        }}/>
        <CardBody>

        <CardTitle style={{fontWeight:"bold",height:"30px"}}>C.E.O AKA Productive Solutions</CardTitle>
        <CardText style={{fontSize:"14px"}}>
        Great work with beautiful color matching. I didnt know website could be delivered this quick.
        </CardText>
        </CardBody>
      </Card>
      </Col>
        </div>
      <div>
        <Col>
        <Card style={{maxWidth:"300px", border:"1px solid #f8f9fa"}}>
        
        <img alt="#" src={require("../assets/img/martek.jpg")} style={{borderRadius:"100%", width:"80px", height:"50px",
        marginTop:"10px", marginLeft:"15px"
        }}/>
        <CardBody>

        <CardTitle style={{fontWeight:"bold",height:"30px"}}>C.E.O Martek</CardTitle>
        <CardText style={{fontSize:"14px"}}>
        Great work with beautiful color matching. I didnt know website could be delivered this quick.
        </CardText>
        </CardBody>
      </Card>
      </Col>
        </div>
        <div>
          <Col>
        <Card style={{maxWidth:"300px", border:"1px solid #f8f9fa"}}>
        
        <img alt="#" src={require("../assets/img/frank.jpg")} style={{ width:"60px", height:"50px",
        marginTop:"10px", marginLeft:"15px"
        }}/>
        <CardBody>

        <CardTitle style={{fontWeight:"bold",height:"30px"}}>C.E.O Franks Assafuah Enterprise</CardTitle>
        <CardText style={{fontSize:"14px"}}>
        Great work with beautiful color matching. I didnt know website could be delivered this quick.
        </CardText>
        </CardBody>
      </Card>
      </Col>
        </div>
      </Slider>
      </Col>
      </Row>
      </div>
     
 


        <div className="section section-contact-us text-center" data-aos="fade-right" style={{marginTop:"-50px"}}>
          <Container>
            <h2 className="title">Contact Us</h2>
            <p className="description">
            <p class="description" ><i className="fa fa-phone" style={{marginRight:"15px"}}/>+233-542161579 / +233-552480391</p>   
                      <p class="description"><i className="fa fa-envelope" style={{marginRight:"15px"}}/>orioninnovations14@gmail.com</p> 
                      
            </p>
            <Row>
            <Col className="text-center ml-auto mr-auto" lg="6" md="8" >
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

        <div className="section">
        <Container className="text-center">
         
          <Row className="justify-content-md-center sharing-area text-center" style={{marginTop:"-100px"}}>
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="twitter-sharrre btn-round"
                style={{backgroundColor:"#55acee"}}
                href="#pablo"
                id="tooltip3373767"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter"/> Twitter
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
                Tweet!
              </UncontrolledTooltip>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                style={{backgroundColor:"#dd4b39"}}
                href="#pablo"
                id="tooltip840791273"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-google-plus" /> Google
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
                Share!
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                style={{backgroundColor:"#0976b4"}}
                href="#pablo"
                id="tooltip68961360"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-linkedin" /> Linkedin
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                Share on Linkedin
              </UncontrolledTooltip>
              <Button
                className="sharrre btn-round ml-2"
                style={{backgroundColor:"#3f729b"}}
                href="https://github.com/creativetimofficial/paper-kit-react?ref=creativetim"
                target="_blank"
                id="tooltip864353654"
              >
                <i className="fa fa-instagram" /> Instagram
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Share!
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
</Container>
      </div>
      <DarkFooter />
    </div>
  );
}

export default LandingPage;
