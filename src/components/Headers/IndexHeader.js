/*eslint-disable*/
import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

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
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">Orion Innovations</h1>
            <h3>We give our customers exactly what they are looking for</h3>
            <br />
            <Link to="/gallery">
            <Button
              className="btn-round mr-1"
              color="neutral"
              outline
            >
              <i className="fa fa-play" />
              Gallery
            </Button>
            </Link>
            <Link to="/shop">
            <Button className="btn-round" color="neutral" type="button" outline>
              Shop
            </Button>
            </Link>
          </div>
          
        </Container>
      </div>
    </div>
  );
}

export default IndexHeader;
