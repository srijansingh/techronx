import React,{Component} from 'react';
import "./service.css"
import { Link } from 'react-router-dom';

class Service extends Component {
    render(){
        return(
                <div className="our-service" >

                    <section className={this.props.index % 2 === 0 ? 'left-align' : 'right-align'}>
                        <div className="service-image">
                            <img src={this.props.image} alt={this.props.heading + ' TechronX'} />
                        </div>
                        <div className="services-intro-container">
                            <div className="service-intro">
                                <div className="service-head">
                                    {this.props.heading}
                                </div>
                                <div className="service-bio">
                                    {this.props.description}
                                </div>
                                
                                <Link to={"/techronx/"+this.props.id} className="button" >View Solution</Link>
                            </div>
                        </div>
                    </section>

                 </div> 
        )
    }
}

export default Service;

