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
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <br/>
            <br/>
            
            <img data-aos='zoom-in'
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 data-aos='zoom-in' className="h1-seo">Orion Innovations</h1>
            <h3>
            <Typical
            loop={Infinity}
            wrapper = "b"
            steps={[
                'We give our customers exactly what they are looking for',1000
            ]}
            >
            </Typical>
             </h3>
            
            <Link to="/hosting">
            <Button
              className="btn-round mr-1"
              color="neutral"
              outline
            style={{
              backgroundColor:"white", color:'black', border:"white"
            }}
           
            >
              <i className="fa fa-play" />
              Hosting
            </Button>
            </Link>
            <Link to="/services">
            <Button  className="btn-round" color="black" type="button" outline
            style={{
              backgroundColor:"white", color:'black', border:"white"
            }}
            
            >
              Services
            </Button>
            </Link>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
              <h4>scroll down</h4>
              <i className = "fa fa-chevron-down"/>
              </div>
          </div>
          
        </Container>
      </div>
    </div>
  );
}

export default IndexHeader;
