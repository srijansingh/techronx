import React, { Component } from 'react'
import SingleBlog from './component/singleBlog';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./blogging.css";
import ReactHtmlParser from 'react-html-parser';
import Bloglist from './component/bloglist';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import Chip from '@material-ui/core/Chip';
import { withRouter } from 'react-router-dom';
import Carousel from '@brainhubeu/react-carousel';
import SingleBlogIntro from './component/singleBlogIntro';

export default class Blogging extends Component {
    constructor(){
        super();
        this.state={
            userimage:null,
            username:null,
            createat:null,
            heading:null,
            content:null,

            keywords:null,
            thumbnail:null,
            keydata: [],
            loading:false,
            posts:[],
            clicked:false

        }
    }

    componentDidMount(){
        this.handleClick();
        console.log("running");
        
        fetch('https://backend.techronx.com/posts/'+this.props.match.params.id, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(result => {
            result.json().then(response => {
                const keydataword = response.data.keyword.split(',').map((response,index)=>{
                    return {response}
                    });
                // console.log(keydataword);

                this.setState({
                    userimage:response.data.imageLink,
                    username:response.data.name,
                    createdat:response.data.created,
                    heading:response.data.heading,
                    content:response.data.content,
                    keyword:response.data.keyword,
                    keydata:keydataword,
                    thumbnail:response.data.thumbnail,
                    loading: false
                })
    
                
            })
        }).catch(err => {
            this.setState({
                loading: false,
                error: err
            });
        })


        axios.get('https://backend.techronx.com/posts/')
        .then(response => {
            this.setState({
                posts: response.data.data
            });
        });

    }

    handleClick = () => {
       
    }
    render() {

        

        const keydatas = this.state.keydata.map((ydata,index)=>{
            return  <Chip label={ydata.response} variant="outlined" />
            });

        const bloglist = this.state.posts.map((blog,index)=>{
            return <a style={{textDecoration:'none'}} key={index} href={"/blog/" + blog.id}>
            <Bloglist  username={blog.name} username={blog.imageLink} heading={blog.heading} keywords={blog.keyword} thumbnail={blog.thumbnail} content={ReactHtmlParser(blog.content.substring(0, 100))} id={blog.id}/> 
            </a>
            });
        
        return (
            <React.Fragment>
                <CssBaseline />
                <Navbar style={{backgroundColor:'white', color:'black'}} />
                <SingleBlogIntro thumbnail={this.state.thumbnail}  createdat={this.state.createdat} username={this.state.username}  heading={this.state.heading}/>
                <main className="singleBlog">
                    
                    <div className="blog-class">
                    <SingleBlog 
                        userimage={this.state.userimage} 
                        username={this.state.username}
                        createdat={this.state.createdat}
                        heading={this.state.heading} 
                        content={ReactHtmlParser(this.state.content)}
                        thumbnail={this.state.thumbnail}
                        keyword={this.state.keyword}

                        
                    /> 
                     <div style={{display:'flex', justifyContent:'space-around', width:'100%',margin:'2rem 0'}}>{keydatas}</div>
                    </div>
                  
                </main>
                <div style={{padding:'4rem 0' , backgroundColor:'#000000', boxShadow:'0 -5px 5px -5px rgba(0, 0, 0, 0.06)' }}>
                    {/* <h1 style={{color:'white'}}>Our recent blogs</h1> */}
                <Carousel
                    slidesPerScroll={1}
                    ltr 
                    autoPlay={2000}
                    stopAutoPlayOnHover
                    slidesPerPage={3}
                    keepDirectionWhenDragging
                    
                    offset={10}
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
                            
                            centered:true,
                            //   arrowLeft: (<Icon className="icon-example" name="arrow-left" />),
                            //   arrowRight: (<Icon className="icon-example" name="arrow-right" />),
                            animationSpeed: 1000,
                            infinite: true,
                        },
                    }}
             
                >
                    {bloglist}
                </Carousel>
                    </div>
                <Footer />
            </React.Fragment>

        )
    }
}
