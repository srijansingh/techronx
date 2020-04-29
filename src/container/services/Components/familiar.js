import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import "./familiar.css";
import FamiliarImage from "../../../images/element31.png";
class Familiar extends Component{
    render(){
        return(
            <div className="familiar">
                <div className="familiar-intro">
                    <div className="familiar-box">
                        <div className="familiar-head">
                            Let's get Acquainted..
                        </div>
                        <div className="familiar-bio">
                            TechronX is a team of passionate professionals, who love creating
                            beautiful and high-valuable projects. There is nothing better for us
                            than seeing happy people, who enjoy using the products we create.
                            If you would like to learn more about our team, cozy office and 
                            workflow, just follow the link below.
                        </div>
                        <Button  className="button" variant="contained" color="primary" href="/contact" >
                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className="familiar-image">
                    <img src={FamiliarImage} alt="Let's get acquanted" />
                </div>
            </div>
        )
    }
}

export default Familiar;