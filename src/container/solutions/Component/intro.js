import React, { Component } from 'react'
import "./intro.css"
import ScrollAnimation from 'react-animate-on-scroll';
import {Helmet} from 'react-helmet';

export default class SolutionIntro extends Component {
   
    
    
    render() {

       const metaTag = <Helmet>
                            
                           
            <title>{this.props.heading}</title>
            <meta name="title" content="TechronX Information Technology Company"/>
            <meta name="description" content={this.props.content}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={window.location.href}/>
            <meta property="og:title" content={this.props.heading + " Techronx"}/>
            <meta property="og:description" content={this.props.content}/>
            <meta property="og:image" content={this.props.imageurl}/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={window.location.href}/>
            <meta property="twitter:title" content={this.props.heading + " Techronx"}/>
            <meta property="twitter:description" content={this.props.content}/>
            <meta property="twitter:image" content={this.props.imageurl} />

        </Helmet>

        
        return (
            <div className="solution">
                {metaTag}
                <div className="solution-description">
                    <div className="solution-head">
                        {this.props.heading}
                        
                        <ScrollAnimation animateIn="fadeIn" delay={2} duration={2}  className="solution-bio">
                        {this.props.content}
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="solution-image">
                    <img src={this.props.imageurl} alt={this.props.heading + " Techronx"} />
                </div>
            </div>
        )
    }
}
