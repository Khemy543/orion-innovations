/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit


import LandingPage from "pages/LandingPage.js";
import AboutUsPage from "pages/AboutUsPage.js";
import ServicePage from "pages/ServicePage.js";
import HostingPage from "pages/HostingPage.js";


ReactDOM.render(
  <BrowserRouter>
   
        <Switch>
         <Route exact path='/' component={ LandingPage } />
         <Route exact path='/about-us' component={ AboutUsPage } />
         <Route exact path='/services' component={ ServicePage } />
         <Route exact path='/hosting' component={ HostingPage } />
        </Switch>
        
    
    </BrowserRouter>,
  document.getElementById("root")
);
