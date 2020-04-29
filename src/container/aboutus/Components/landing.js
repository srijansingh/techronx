import React, {Component} from "react";
import AboutImage from "../../../images/aboutus.png";
import "./landing.css";
class Landing extends Component {
    render(){
        return(
            <div className="aboutus">
                <div className="intro-description">
                    <div className="intro-head">
                        About Us
                        <div className="intro-bio">
                         A quick overview of who we are.
                        </div>
                    </div>
                </div>
                <div className="intro-image">
                    <img src={AboutImage} alt="techronx" />
                </div>
            </div>
        )
    }
}

export default Landing;