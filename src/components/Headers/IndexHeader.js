/*eslint-disable*/
import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import Typical from "react-typical";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) { 
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <div>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header4.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand" style={{marginTop:"35px"}}>
            <div style={{marginTop:"100px"}}>
            <img 
              alt="..."
              className="n-logo"
              src={require("assets/img/orion.png")}
            ></img>
            <h3  style={{}}>Get a professionally built website for your</h3>
            <div style={{height:"125px"}}>
            <h1 className="h1-seo" style={{fontSize:"53px"}}>
            <Typical
            loop={Infinity}
            wrapper = "b"
            steps={[
                'business',1000,
                'blog', 1000,
                'start-up', 1000,
                'company', 1000,
                'e-commerce', 1000,
            ]}
            >
            </Typical>
             </h1>
             </div>
            
            <Link to="/hosting">
            <Button
              className="btn-round mr-1"
              color="neutral"
              outline
            style={{
              fontSize:"13px", fontWeight:"510"
            }}
           id="buttons"
            >
              <i className="fa fa-play" style={{marginRight:"7px"}}/>
              Hosting
            </Button>
            </Link>
            <Link to="/services">
            <Button  className="btn-round" color="black" type="button" outline
            style={{
              fontSize:"13px", fontWeight:"600"
            }}
            id="buttons"
            >
              Services
            </Button>
            </Link>

            
            <div style={{marginTop:"20px"}}>
              <h4>scroll down</h4>
              <i className = "fa fa-chevron-down"/>
              </div>
            </div>  
          </div>
          
        </Container>
      </div>
    </div>
  );
}

export default IndexHeader;
