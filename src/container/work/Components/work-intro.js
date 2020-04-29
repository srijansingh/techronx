import React,{Component} from 'react';
// import Button from '@material-ui/core/Button';

// import IntroImage from "../../../images/elemet-01.png";
import "./work-intro.css";

class WorkIntro extends Component{
    render(){
        return (
            <div className="work-intro-box">
                <div className="work-intro-description">
                    <div className="work-intro-head">
                        TechronX - IT Services
                       

                        <div className="work-intro-bio">
                        From start to finish, we offer excellent product solutions.
                        </div>
                    </div>
                    {/* <Button className="button" variant="contained" color="primary" >
                        Contact Us
                    </Button> */}
                    
                </div>
                <div className="work-intro-image">
                        {/* <img src={IntroImage} alt="techronx" /> */}
                </div>
            </div>
        )
    }
}

export default WorkIntro;