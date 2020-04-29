import React,{Component} from 'react';
import "./aboutus.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";

import Landing from "./Components/landing";
import Introduction from "./Components/introduction";
import Team from "./Components/ourteam";
import {Helmet} from 'react-helmet';
import AboutImg from "../../images/aboutus2.png";


class Aboutus extends Component{

   

    render(){
       
        const metaTag = <Helmet>
                            
                           
            <title>About | TechronX</title>
            <meta name="title" content="About Tehronx"/>
            <meta name="description" content="Web and Mobile App Development TechronX,Custom Web Appliction TechronX,Mobile Application TechronX,E-commerce TechronX,E-learning TechronX,Digital Marketing TechronX,Search Engine Optimition(SEO) TechronX,Search Engine Marketing(SEM) TechronX,Social Media Marketing(SMO) TechronX,Social Media Advertising(SMA) TechronX,Pay Per Click(PPC) TechronX,E-mail Marketing,Content Marketing TechronX,Analytics TechronX,Graphic Design TechronX,User Interface Design TechronX, Experience Design TechronX,Photography TechronX,Videography TechronX"/>

    
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={window.location.href}/>
            <meta property="og:title" content="Services Offered  by Techronx"/>
            <meta property="og:description" content="Web and Mobile App Development TechronX,Custom Web Appliction TechronX,Mobile Application TechronX,E-commerce TechronX,E-learning TechronX,Digital Marketing TechronX,Search Engine Optimition(SEO) TechronX,Search Engine Marketing(SEM) TechronX,Social Media Marketing(SMO) TechronX,Social Media Advertising(SMA) TechronX,Pay Per Click(PPC) TechronX,E-mail Marketing,Content Marketing TechronX,Analytics TechronX,Graphic Design TechronX,User Interface Design TechronX, Experience Design TechronX,Photography TechronX,Videography TechronX"/>
            <meta property="og:image" content={AboutImg}/>

    
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={window.location.href}/>
            <meta property="twitter:title" content="Services Offered  by Techronx"/>
            <meta property="twitter:description" content="Web and Mobile App Development TechronX,Custom Web Appliction TechronX,Mobile Application TechronX,E-commerce TechronX,E-learning TechronX,Digital Marketing TechronX,Search Engine Optimition(SEO) TechronX,Search Engine Marketing(SEM) TechronX,Social Media Marketing(SMO) TechronX,Social Media Advertising(SMA) TechronX,Pay Per Click(PPC) TechronX,E-mail Marketing,Content Marketing TechronX,Analytics TechronX,Graphic Design TechronX,User Interface Design TechronX, Experience Design TechronX,Photography TechronX,Videography TechronX"/>
            <meta property="twitter:image" content={AboutImg} />

        </Helmet>

        return(
            <div className="aboutus-main">
                {metaTag}
                <Navbar />
                <Landing />
                <Introduction />
                <Team />
                <Footer />
            </div>
        )
    }
}

export default Aboutus;