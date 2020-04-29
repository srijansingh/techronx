import React, {Component} from "react";
import "./ourteam.css";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import axios from 'axios'
import Subteam from "./subteam";


class Team extends Component{

    constructor(){
        super();
        this.state = {
            team : [],
            loading:false,
            error: false
        }
    }

    componentDidMount(){
        this.setState({
           loading:true
        });
        axios.get('https://backend.techronx.com/team')
        .then(response => {

            this.setState({
               team: response.data.data
            });
        })
        .catch(err => {
            this.setState({
               error : true,
               loading: false
            });
        })
    }



    render(){

        const teams = this.state.team.map((member,index)=>{
            return <Subteam key={index} name={member.name} position = {member.position} imagelink = {member.imagelink} linkedin={member.linkedin}  email={member.email} />
        })

        return(
            <div className="ourteam">
               
                
            <div className="keyindustry">
                <div className="keyindustry-box">
                    <div className="keyindustry-heading">
                        Key Industry we Serve
                    </div>
                </div>
                <div className="key-box">
                    <div className="key-name">
                        <div className="key-heading">
                            Web and Mobile App Development
                        </div>
                        <ul className="ul" type="square">
                            <li>Custom Web Appliction</li>
                            <li>Mobile ppliction</li>
                            <li>E-commerce</li>
                            <li>E-learning</li>
                        </ul>
                    </div> 

                    <div className="key-name">
                        <div className="key-heading">
                            Digital Marketing
                        </div>
                        <ul className="ul" type="star">
                            <li>Search Engine Optimition(SEO)</li>
                            <li>Search Engine Marketing(SEM)</li>
                            <li>Social Media Marketing(SMO)</li>
                            <li>Social Media Advertising(SMA)</li>
                            <li>Pay Per Click(PPC)</li>
                            <li>E-mail Marketing</li>
                            <li>Content Marketing</li>
                            <li>Analytics</li>
                        </ul>
                    </div>

                    <div className="key-name">
                        <div className="key-heading">
                            Graphic Design
                        </div>
                        <ul className="ul" type="star">
                            <li>User Interface Design</li>
                            <li>User Experience Design</li>
                            <li>Photography</li>
                            <li>Videography</li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div className="ourteam-box">
                <div className="ourteam-heading">
                        Our Team 
                        
                        <div className="span">
                            <span className="span-1"></span>
                            <span className="span-2"></span>
                        </div>
                    </div>
                    </div>
            <Carousel
                    slidesPerScroll={1}
                    ltr 
                    dots
                    autoPlay={2000}
                    stopAutoPlayOnHover
                    slidesPerPage={4}
                    keepDirectionWhenDragging
                    
                    offset={30}
                    infinite
                    animationSpeed={2000}
                    
                    breakpoints={{
                            1000: { // these props will be applied when screen width is less than 1000px
                            clickToChange: false,
                            centered: true,
                            //   arrows: true,
                            slidesPerPage:2,
                            slidesPerScroll: 2,
                            infinite: true,
                            },
                            500: {
                            slidesPerPage: 1,
                            slidesPerScroll: 1,
                            clickToChange: false,
                            centered: false,
                            //   arrowLeft: (<Icon className="icon-example" name="arrow-left" />),
                            //   arrowRight: (<Icon className="icon-example" name="arrow-right" />),
                            animationSpeed: 2000,
                            infinite: true,
                        },
                    }}
            
                >
                {teams}
                
            </Carousel>
            </div>
            
        )
    }
}

export default Team;