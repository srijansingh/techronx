import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import "./work-withus.css";
import FamiliarImage from "../../../images/element31.png";


class WorkWithus extends Component{

    
    

    render(){
        return(
            <div className="work-withus">
                <div className="work-withus-intro">
                    <div className="work-withus-box">
                        <div className="work-withus-head">
                            Start working with Us.
                        </div>
                        <div className="work-withus-bio">
                            Our team of professionals with deep knowledge of above-mentioned technologies 
                            loves helping companies improve their business through tech solutions.
                            Constantly improving our skills, we follow modern approaches to development.
                            Contact us to discuss how we can help you.
                        </div>
                       
                      
                        <Button  className="work-button" variant="contained" color="primary" href="/contact">
                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className="work-withus-image">
                    <img src={FamiliarImage} alt="Let's get acquanted" />
                </div>
            </div>
        )
    }
}

export default WorkWithus;