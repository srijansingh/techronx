import React, {Component} from "react";
import "./introblog.css";
import Blogintroimg from "../../../../images/services/blogintro.png";
import {Helmet} from 'react-helmet'
class Introblog extends Component {
    render(){

        const metaTag = 
            <Helmet>
                <title>TechronX - Blogging</title>
                <meta name="title" content="TechronX Information Technology Company"/>
                <meta name="description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. We apply our digital knowledge to grow your business’s goals and budget to create a scope of work that will help you grow your business. Whether you’re looking to start a website from scratch or want to market your existing website (or both!), we can help."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={window.location.href}/>
                <meta property="og:title" content="TechronX Information Technology Company"/>
                <meta property="og:description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. We apply our digital knowledge to grow your business’s goals and budget to create a scope of work that will help you grow your business. Whether you’re looking to start a website from scratch or want to market your existing website (or both!), we can help."/>
                <meta property="og:image" content={Blogintroimg}/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={window.location.href}/>
                <meta property="twitter:title" content="TechronX Information Technology Company"/>
                <meta property="twitter:description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. We apply our digital knowledge to grow your business’s goals and budget to create a scope of work that will help you grow your business. Whether you’re looking to start a website from scratch or want to market your existing website (or both!), we can help."/>
                <meta property="twitter:image" content={Blogintroimg} />
            </Helmet>

        return(
            <div className="introblog">
                {metaTag}
                <div className="introblog-description">
                    <div className="introblog-head">
                        Blogging
                        <div className="introblog-bio">
                        Be Updated with our Blog
                        </div>
                    </div>
                </div>
                <div className="introblog-image">
                    <img src={Blogintroimg} alt="techronx" />
                </div>
            </div>
        )
    }
}

export default Introblog;