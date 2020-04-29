import React, { Component } from 'react'
import "./testimonial.css";
class Testimonial extends Component {
    render() {
        return (
            <div className="testimonials">
                
                <img src={this.props.imagelink} alt={this.props.serviceid}/>
                
            </div>
        )
    }
}

export default  Testimonial;