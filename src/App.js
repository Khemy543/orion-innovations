import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
import "./App.css";

//AOS animation
import AOS from "aos";
import "aos/dist/aos.css";

//Slide css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// pages for this kit
import LandingPage from "pages/LandingPage.js";
import AboutUsPage from "pages/AboutUsPage.js";
import ServicePage from "pages/ServicePage.js";
import HostingPage from "pages/HostingPage.js";


class App extends React.Component{

    // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

    /* constructor(props){
        super(props);
    } */
    componentDidMount(){

        this.authenticate().then(() => {
            const ele = document.getElementById('ipl-progress-indicator')
            if(ele){
              // fade out
              ele.classList.add('available')
              setTimeout(() => {
                // remove from DOM
                ele.outerHTML = ''
              }, 2000)
            }
          })

        AOS.init({
            duration: 1000
        })
    }
    render(){
        return(
            <BrowserRouter>
            <ScrollToTop />
                 <Switch>
                  <Route exact path='/' component={ LandingPage } />
                  <Route exact path='/about-us' component={ AboutUsPage } />
                  <Route exact path='/services' component={ ServicePage } />
                  <Route exact path='/hosting' component={ HostingPage } />
                 </Switch>
                 
             </BrowserRouter>
        );
    
    }
    
}
export default App;
  
