  
import React from "react";
//import { Link } from "react-router-dom";

// reactstrap components
//import { Row, Container } from "reactstrap";


function Footer() {
  return (
    <footer className="page-footer font-small unique-color-dark" style={{backgroundColor:"rgba(30, 30, 30, 0.24) ", paddingTop:"20px"}}>
  <div className="container">

    
    <div className="row mt-3">

       
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        
        <h6 className="text-uppercase font-weight-bold">ORION INNOVATIONS</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p style={{fontWeight:"500"}}>We delight our customers because we give them exactly what they are looking for</p>

      </div>
      

       
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

         
        <h6 className="text-uppercase font-weight-bold">Products</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  style={{width: "60px"}}/>
        <p>
          <a href="#!" style={{color:"inherit", fontWeight:"500"}}>Website Designing</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit", fontWeight:"500"}}>Web Maintenance</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit", fontWeight:"500"}}>Web Renovating and Upgrades</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit", fontWeight:"500"}}>Website Hosting</a>
        </p>

      </div>
      

      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        
        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  style={{width: "60px"}}/>
        <p>
          <a href="#!" style={{color:"inherit", fontWeight:"500"}}>Home</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit", fontWeight:"500"}}>Services</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit", fontWeight:"500"}}>Privacy and Policy</a>
        </p>
        <p>
          <a href="#!" style={{color:"inherit", fontWeight:"500"}}>Terms and Conditions</a>
        </p>

      </div>
       

       
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        
        <h6 className="text-uppercase font-weight-bold">Follow us on</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  style={{width: "60px"}}/>


        <a href="https://twitter.com/AkaProductive" target="_blank" rel="noopener noreferrer" style={{color:"inherit", fontWeight:"500"}}>
        <p style={{fontWeight:"500"}}>
          <i className="fa fa-twitter mr-3" ></i>
           Twitter</p>
        </a>


          <a href="#!" style={{color:"inherit", fontWeight:"500"}}>
          <p style={{fontWeight:"500"}}>
          <i className="fa fa-facebook mr-3"></i>
           Facebook</p>
           </a>



          <a href="https://www.instagram.com/_akaproductivesolutionsltd/" target="_blank" rel="noopener noreferrer" style={{color:"inherit", fontWeight:"500"}}>
          <p style={{fontWeight:"500"}}>
          <i className="fa fa-instagram mr-3"></i>
           Instagram</p>
           </a>

           
          <a href="#!" style={{color:"inherit", fontWeight:"500"}}> 
          <p style={{fontWeight:"500"}}> 
          <i className="fa fa-linkedin mr-3"></i>
           Linkedin</p>
           </a>
      </div>
       

    </div>
    

  </div>
   

  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#!" style={{color:"inherit", fontWeight:"500"}}> Orion Innovations Limited</a>
  </div>
   
</footer>
  );
}

export default Footer;
