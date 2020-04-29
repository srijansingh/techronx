import React, {Component} from "react";
import { NavLink} from "react-router-dom";
import "./footer.css";
import {Icon} from 'react-fa'
import Logo from "../../images/final logo-01.png"
import {
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon
  } from "react-share";
class Footer extends Component {
    render(){
        return(

            <div className="footer">
                <div className="footer-main">
                    <div className="footer-name">
                        <img src={Logo} width="150"/>
                    </div>
                    <div className="footer-nav">
                        <NavLink className="footer-navlink" to={{pathname:"/"}} exact>Home</NavLink>
                        <NavLink className="footer-navlink" to={{pathname:"/blog"}} exact>Blog</NavLink>
                        <NavLink className="footer-navlink" to={{pathname:"/about"}} exact>About Us</NavLink>
                        <NavLink className="footer-navlink" to={{pathname:"/services"}} exact>Services</NavLink>
                        <NavLink className="footer-navlink" to={{pathname:"/contact"}} exact>Contact</NavLink>
                    </div>
                    <div className="footer-community">
                        <div className="comm-head">Join the Community</div>
                          <div className="social-media">
                           <a href="https://www.facebook.com/techronx"  target="blank"><FacebookIcon size={24} round={true} /></a>
                            <a href="https://www.twitter.com/mytechronx" target="blank"><TwitterIcon size={24} round={true} /></a>
                            <a href="https://www.linkedin.com/company/techronx" target="blank"><LinkedinIcon size={24} round={true}/></a>
                            <a href="https://api.whatsapp.com/send?phone=7289991556" target="blank"><WhatsappIcon size={24} round={true} /></a>
                        </div>
                    </div>
                    <div className="footer-community">
                        <div className="comm-head">Email Us</div>
                          <div className="social-media">
                            <a style={{textDecoration:'none', color:'#a6a6a6'}} href="mailto:support@techronx.com" target="blank" >support@techronx.com</a>
                            
                        </div>
                    </div>
                    
                </div>

                <div className="footer-serv">
                    <div className="footer-policy">Copyright 2020</div>
                    <NavLink to={{pathname:"/privacypolicy"}} exact className="footer-policy">Privacy Policy</NavLink>
                    <NavLink  to={{pathname:"/termscondition"}} exact className="footer-policy">Terms & Condition</NavLink>
                </div>
            </div>
        )
    }
}

export default Footer;