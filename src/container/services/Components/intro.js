import React,{Component} from 'react';
import Button from '@material-ui/core/Button';

// import IntroImage from "../../../images/elemet-01.png";
import "./intro.css";

class IntroPage extends Component{
    render(){
        return (
            <div className="intro-box">
                <div className="intro-description">
                    <div className="intro-head">
                        TechronX - IT Solutions <br />
                        and Services Company.

                        <div className="intro-bio">
                        TechronX constantly advances to provide innovative IT solutions in
                        order to make better future by improving your business.
                        </div>
                    </div>
                    <Button href="/contact" className="button" variant="contained" color="primary" >
                        Contact Us
                    </Button>
                    
                </div>
                <div className="intro-image">
                        {/* <img src={IntroImage} alt="techronx" /> */}
                </div>
            </div>
        )
    }
}

export default IntroPage;