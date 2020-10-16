import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import CarouselView from "components/Carousel/Carousel.js";
import {

  Container,
  Row,
  Col,
  Button,
  UncontrolledTooltip

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
        <CarouselView />
        <div className="section section-contact-us text-center">
          <Container>
            <Row>
              <Col md="4">
                <div data-aos='zoom-in'>
                  <img alt="#" src={require("../assets/img/services/service3.png")}
                    style={{
                      maxWidth: "250px",
                      height: "auto",
                      marginTop: "-10px"
                    }}
                  />
                  <h4 style={{ color: "black", fontWeight: "500", marginTop: "-20px" }}>Website Design</h4>
                </div>
              </Col>

              <Col md="8">
                <p style={{
                  marginTop: "20px", paddingLeft: "60px", borderLeft: "2px solid #00000036"
                }}
                  data-aos='zoom-in'
                >
                  Strategically planned and innovative website designs to help your company or business move to the next level.
                  Aesthetic, well-thought out designs to convey the uniqueness of your company to your future customers
              </p>
              </Col>
            </Row>
            <Row>

              <Col md="8">
                <p style={{
                  marginTop: "20px", paddingRight: "60px", borderRight: "2px solid #00000036"
                }}
                  data-aos='zoom-in'
                >
                  All your needs met in one request. We don’t only design your website, we provide hosting services as well.
              </p>
              </Col>
              <Col md="4">
                <div data-aos='zoom-in'>
                  <img alt="#" src={require("../assets/img/services/service4.png")}
                    style={{
                      maxWidth: "250px",
                      height: "auto",
                      marginTop: "-10px"
                    }}
                  />
                  <h4 style={{ color: "black", fontWeight: "500", marginTop: "-20px" }}>Website Hosting</h4>
                </div>
              </Col>

            </Row>
            <Row>
              <Col md="4">
                <div data-aos='zoom-in'>
                  <img alt="#" src={require("../assets/img/services/service5.png")}
                    style={{
                      maxWidth: "250px",
                      height: "auto",
                      marginTop: "-10px"
                    }}
                  />
                  <h4 style={{ color: "black", fontWeight: "500", marginTop: "-20px" }}>Website Marketing</h4>
                </div>
              </Col>

              <Col md="8">
                <p style={{
                  marginTop: "20px", paddingLeft: "60px", borderLeft: "2px solid #00000036"
                }}
                  data-aos='zoom-in'
                >
                  Digital marketing of web services on digital and media platforms to promote products and services, bringing your customers closer to you.
              </p>
              </Col>
            </Row>
            <Row>

              <Col md="8">
                <p style={{
                  marginTop: "20px", paddingRight: "60px", borderRight: "2px solid #00000036"
                }}
                  data-aos='zoom-in'
                >
                  We give a facelift to your existing websites
              </p>
              </Col>
              <Col md="4">
                <div data-aos='zoom-in'>
                  <img alt="#" src={require("../assets/img/services/service3.png")}
                    style={{
                      maxWidth: "250px",
                      height: "auto",
                      marginTop: "-10px"
                    }}
                  />
                  <h4 style={{ color: "black", fontWeight: "500", marginTop: "-20px" }}>Website Renovation and Upgrades</h4>
                </div>
              </Col>

            </Row>
            <Row>
              <Col md="4">
                <div data-aos='zoom-in'>
                  <img alt="#" src={require("../assets/img/services/service2.png")}
                    style={{
                      maxWidth: "250px",
                      height: "auto",
                      marginTop: "-10px"
                    }}
                  />
                  <h4 style={{ color: "black", fontWeight: "500", marginTop: "-20px" }}>Website Maintenance</h4>
                </div>
              </Col>

              <Col md="8">
                <p style={{
                  marginTop: "20px", paddingLeft: "60px", borderLeft: "2px solid #00000036"
                }}
                  data-aos='zoom-in'
                >
                  Regular house cleaning for problems that may arise on your website and consistent maintenance for a smooth-running business.
                  We keep your website from becoming rusty overtime.
                  
              </p>
              </Col>
            </Row>
            <Row>

              <Col md="8">

                <p style={{
                  marginTop: "20px", paddingRight: "60px", borderRight: "2px solid #00000036"
                }}
                  data-aos='zoom-in'
                >
                  First impressions matter hence we ensure to give you designs to captivate your customers from the first sight.
              </p>
              </Col>
              <Col md="4">
                <div data-aos='zoom-in'>
                  <img alt="#" src={require("../assets/img/services/service9.png")}
                    style={{
                      maxWidth: "250px",
                      height: "auto",
                      marginTop: "-10px"
                    }}
                  />
                  <h4 style={{ color: "black", fontWeight: "500", marginTop: "-20px" }}>Graphic Design and Photography</h4>
                </div>
              </Col>

            </Row>
          </Container>
        </div>

        <div className="section">
          <Container className="text-center">
            {/* <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Do you like what you see?</h2>
                <p className="description">
                  Cause if you do, it can be yours for Free. Hit the button below
                  and download it. Start a new project or give an old Bootstrap 4
                  project a new look.
              </p>
              </Col>
              <Col className="ml-auto mr-auto download-area" md="5">
                <Button
                  className="btn-round"
                  color="danger"
                  href="http://www.creative-tim.com/product/paper-kit-react?ref=pkr-index-page"
                  target="_blank"
                >
                  Download free React
              </Button>
              </Col>
            </Row>
            <Row className="text-center upgrade-pro">
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Want more?</h2>
                <p className="description">
                  We're going to launch{" "}
                  <a className="text-danger" href="#pablo" disabled>
                    Paper Kit PRO React in a few weeks
                </a>
                . It will have a huge number of components, sections and example
                pages.
              </p>
              </Col>
              <Col className="ml-auto mr-auto" sm="5">
                <Button className="btn-round" color="info" href="#pablo" disabled>
                  <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                Upgrade to PRO
              </Button>
              </Col>
            </Row> */}
            <Row className="justify-content-md-center sharing-area text-center">
              <Col className="text-center" lg="8" md="12">
                <h3>Thank you for supporting us!</h3>
              </Col>
              <Col className="text-center" lg="8" md="12">
                <Button
                  className="twitter-sharrre btn-round"
                  color="twitter-bg"
                  href="#pablo"
                  id="tooltip3373767"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-twitter" /> Twitter
              </Button>
                <UncontrolledTooltip delay={0} target="tooltip3373767">
                  Tweet!
              </UncontrolledTooltip>
                <Button
                  className="linkedin-sharrre btn-round  ml-2"
                  color="google-bg"
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
                  color="facebook-bg"
                  href="#pablo"
                  id="tooltip68961360"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-facebook-square" /> Facebook
              </Button>
                <UncontrolledTooltip delay={0} target="tooltip68961360">
                  Share!
              </UncontrolledTooltip>
                <Button
                  className="sharrre btn-round ml-2"
                  color="github-bg"
                  href="https://github.com/creativetimofficial/paper-kit-react?ref=creativetim"
                  target="_blank"
                  id="tooltip864353654"
                >
                  <i className="fa fa-github" /> Star
              </Button>
                <UncontrolledTooltip delay={0} target="tooltip864353654">
                  Star on Github
              </UncontrolledTooltip>
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