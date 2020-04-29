import React, { Component } from 'react'
import "./ourteam.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class Subteam extends Component {
    render() {
        return (
            <div className="team-box">
            <div className="team-cover">
            <div className="team-userlogo">
                    <img src={this.props.imagelink} alt={this.props.name}/>
                </div>
            </div>
            
                <div className="username-box">
                <div className="username">{this.props.name}</div>
        <div className="userposition"> {this.props.position} | Techronx</div>
                </div>
                <a href={this.props.linkedin} className="user-link">View Profile <FontAwesomeIcon className="icon" icon={faArrowRight} /></a>

        </div>
        )
    }
}
