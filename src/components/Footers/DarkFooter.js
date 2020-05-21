import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="#" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}>Website Designing</Link>
        </p>
        <p>
          <Link to="#" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}>Web Maintenance</Link>
        </p>
        <p>
          <Link to="#" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}>Web Renovating and Upgrades</Link>
        </p>
        <p>
          <Link to="#" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}>Website Hosting</Link>
        </p>
        

      </div>
      

      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        
        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  style={{width: "60px"}}/>
        <p>
          <Link to="#!" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}>Home</Link>
        </p>
        <p>
          <Link to="#!" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}>Services</Link>
        </p>
        <p>
          <Link to="#!" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}>Privacy and Policy</Link>
        </p>
        <p>
          <Link to="#!" style={{color:"inherit", fontWeight:"500"}}>Terms and Conditions</Link>
        </p>

      </div>
       

       
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        
        <h6 className="text-uppercase font-weight-bold">Follow us on</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"  style={{width: "60px"}}/>


        <a href="orioninnovations14@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}>
          <p style={{fontWeight:"500"}}>
          <i className="fa fa-google-plus mr-3" style={{color:"#dd4b39"}}></i>
           Google</p>
           </a>


        <a href="https://twitter.com/Orion_Inno" target="_blank" rel="noopener noreferrer" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}>
        <p style={{fontWeight:"500"}}>
          <i className="fa fa-twitter mr-3" style={{color:"#55acee"}}></i>
           Twitter</p>
        </a>


         



          <a href="https://www.instagram.com/orion_innovations?igshid=1rswhp62tqq1w" target="_blank" rel="noopener noreferrer" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}>
          <p style={{fontWeight:"500", textDecoration:"none"}}>
          <i className="fa fa-instagram mr-3" style={{color:"#3f729b"}}></i>
           Instagram</p>
           </a>

           
          <a href="https://www.linkedin.com/company/orion-innovations-ghana"  target="_blank" rel="noopener noreferrer" style={{color:"inherit", fontWeight:"500", textDecoration:"none"}}> 
          <p style={{fontWeight:"500", textDecoration:"none"}}> 
          <i className="fa fa-linkedin mr-3"style={{color:"#0976b4"}}></i>
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
