import React, {Component} from "react";

import IconButton from '@material-ui/core/IconButton';
import moment from "moment";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton
  } from "react-share";
  
  import {
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon
  } from "react-share";


import "./singleBlogIntro.css";
class SingleBlogIntro extends Component {
    render(){
        const shareUrl = window.location.href;
        const timeAgo = moment(this.props.createdat).fromNow();
        return(
            <div className="SingleBlogIntro">
                <div className="SingleBlogIntro-description">
                    <div className="SingleBlogIntro-head">
                        {this.props.heading}
                        <div className="SingleBlogIntro-bio">
                            <div> 
                                By -   {this.props.username} 
                            </div>
                            <div>
                                {timeAgo}

                            </div>
                            <div className="social-icon" style={{marginTop:'2rem'}}>

                                <TwitterShareButton url={shareUrl} title={this.props.heading}>
                                    <IconButton aria-label="share" >
                                        <TwitterIcon size={32} round={true} />
                                    </IconButton>
                                </TwitterShareButton>
                        
                        
                                <FacebookShareButton url={shareUrl} quote={this.props.heading}>
                                    <IconButton aria-label="share">
                                        <FacebookIcon size={32} round={true} />
                                    </IconButton>
                                </FacebookShareButton>
                        
                                <LinkedinShareButton url={shareUrl }>
                                    <IconButton aria-label="share">
                                        <LinkedinIcon size={32} round={true} />
                                    </IconButton>
                                </LinkedinShareButton>

                                <TelegramShareButton url={shareUrl }>
                                    <IconButton aria-label="share">
                                        <TelegramIcon size={32} round={true}/>
                                    </IconButton>
                                </TelegramShareButton>

                                <WhatsappShareButton url={shareUrl }>
                                    <IconButton aria-label="share">
                                        <WhatsappIcon size={32} round={true}/>
                                    </IconButton>
                                </WhatsappShareButton>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="SingleBlogIntro-image">
                    <img src={this.props.thumbnail} alt="techronx" />
                </div> */}
            </div>
        )
    }
}

export default SingleBlogIntro;