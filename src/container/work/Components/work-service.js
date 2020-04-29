import React,{Component} from 'react';
import "./work-service.css"

import Service1 from "../../../images/services/services1.png";
import Service4 from "../../../images/services/services4.png";
import Service5 from "../../../images/services/services5.png";
import Service2 from "../../../images/services/services2.png";
import Service9 from "../../../images/services/services9.png";
import Service0 from "../../../images/services/services0.png";
import Service6 from "../../../images/services/services6.png";



class WorkService extends Component {
    render(){
        return(
            <div className="work-service">
                <div className="work-services-heading">
                    
                    How Do We Work?
                    
                    <div className="span">
                        <span className="span-1"></span>
                        <span className="span-2"></span>
                    </div>
                </div>
                <section className="work-left-align">
                    <div className="work-services-intro-container">
                        <div className="work-service-intro">
                            <div className="work-count">1</div>
                            <div className="work-service-head">
                            Hear the client out
                            </div>
                            <div className="work-service-bio">
                            The first stage is estimating our customer's needs. 
                            Here you share your plans and problems with us and 
                            we help you find the best way to realize them. 
                            This is the fundamental part, so we will ask a 
                            lot of questions and dig into the issue you are going to solve.


                            </div>
                           
                        </div>
                    </div>
                    <div className="work-service-image">
                        <img src={Service1} alt="Digital Marketing Techronx" />
                    </div> 
                </section>
                <section className="work-right-align">
                    <div className="work-service-image">
                        <img src={Service4} alt="Web and Mobile App Development Techronx" />
                    </div>
                    <div className="work-services-intro-container">
                        <div className="work-service-intro">
                            <div className="work-count">2</div>
                            <div className="work-service-head">
                               Assemble the team
                                
                            </div>
                            <div className="work-service-bio">
                            We provide the services of the highest quality, that is why
                            we gather the strongest team of true professionals and enthusiasts to work on your
                            project. The environment inside our IT company keeps them as productive as possible.
                            Our team works according to Agile methodology and connects through top applications
                            like Jira and Slack for uninterrupted communication and smooth workflow.
                                   
                            </div>
                            
                           
                        </div>
                    </div>
                </section>


                <section className="work-left-align">
                    <div className="work-services-intro-container">
                        <div className="work-service-intro">
                        <div className="work-count">1</div>
                            <div className="work-service-head">
                            Do the paperwork
                            </div>
                            <div className="work-service-bio">
                            A stage of planning, scope estimation, and requirements approvement. 
                            Every project should have a technical requirement agreed, as a way of 
                            confirmation that we understood each other. Here we dig into technical
                             details and find the best way to make your idea a reality.




                            </div>
                           
                        </div>
                    </div>
                    <div className="work-service-image">
                        <img src={Service5} alt="Digital Marketing Techronx" />
                    </div> 
                </section>
                <section className="work-right-align">
                    <div className="work-service-image">
                        <img src={Service2} alt="Web and Mobile App Development Techronx" />
                    </div>
                    <div className="work-services-intro-container">
                        <div className="work-service-intro">
                        <div className="work-count">4</div>
                            <div className="work-service-head">
                            Design & Develop
                                
                            </div>
                            <div className="work-service-bio">
                            This is the part where a project comes to life. Our creative
                            minds design the interface and experience, for your users to adore it. After design,
                            it’s a time of development, where our top technical performers make a project work
                            as planned.
                        
                                   
                            </div>
                            
                           
                        </div>
                    </div>
                </section>
                
                <section className="work-left-align">
                    <div className="work-services-intro-container">
                        <div className="work-service-intro">
                        <div className="work-count">5</div>
                            <div className="work-service-head">
                            Test and iterate
                            </div>
                            <div className="work-service-bio">
                            Check yourself before you wreck yourself. 
                            Testing is critical before release, here we 
                            check our work, to make sure everything works 
                            well and meets our customer’s needs.

                            </div>
                           
                        </div>
                    </div>
                    <div className="work-service-image">
                        <img src={Service9} alt="Digital Marketing Techronx" />
                    </div> 
                </section>
                <section className="work-right-align">
                    <div className="work-service-image">
                        <img src={Service0} alt="Web and Mobile App Development Techronx" />
                    </div>
                    <div className="work-services-intro-container">
                        <div className="work-service-intro">
                        <div className="work-count">6</div>
                            <div className="work-service-head">
                            Launch the project
                                
                            </div>
                            <div className="work-service-bio">
                            This is the moment it all started for. 
                            It is important to make project launch 
                            successful both from technical and marketing side. 
                            With a help of our specialists, your “ship” will float without any trouble.
                            </div>
                            
                           
                        </div>
                    </div>
                </section>

                <section className="work-left-align">
                    <div className="work-services-intro-container">
                        <div className="work-service-intro">
                        <div className="work-count">7</div>
                            <div className="work-service-head">
                            Support & Update
                            </div>
                            <div className="work-service-bio">
                            We are more than interested to go with your company into a bright future. 
                            Our IT company will support your project on the go and fix issues ASAP. 
                            If you want to add some new feature - just tell us, we will work on it going 
                            through stages.



                            </div>
                           
                        </div>
                    </div>
                    <div className="work-service-image">
                        <img src={Service6} alt="Digital Marketing Techronx" />
                    </div> 
                </section>
    
   
        </div>
        )
    }
}

export default WorkService;

