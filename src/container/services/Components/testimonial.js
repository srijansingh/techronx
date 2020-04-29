import React, {Component} from "react";
import "./testimonial.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

class Testimonial extends Component{
    render(){
        return(
            <div className="testimonial">
                <div className="test-content">
                    <div className="test-intro">
                        <div className="test-head">
                            Testimonial about Elligense
                        </div>
                        <FontAwesomeIcon className="icon" icon={faQuoteLeft}/><br />
                        <div className="test-bio">
                            My experience with Elligense was nothing short of amazing and 
                            the quality of code from them was very noticeable. 
                            That was the best decision I've made those far when 
                            it comes to our dev team, I am so happy with them...
                        </div>
                        <div className="test-author">
                            <div className="author-name">
                                Srijan Singh
                            </div>
                            <div className="author-position">Founder of Objection.co - SaaS platform for negative review removal and response management</div>
                        </div>
                    </div>
                </div>
                <div className="author-image">
                    {/* <img src={} alt="CEO" /> */}
                </div>
            </div>
        )
    }
}

export default Testimonial;