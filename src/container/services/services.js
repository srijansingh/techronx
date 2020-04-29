import React,{Component} from 'react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import Testimonial from '../solutions/Component/testimonial';
import Familiar from "./Components/familiar";
import Service from "./Components/service";
import IntroPage from "./Components/intro";
import Carousel from '@brainhubeu/react-carousel';
import "./services.css"
import CircularProgress from '@material-ui/core/CircularProgress';

import { Helmet } from 'react-helmet';

class Services extends Component{ 
    state = {
        services : [ ],
        loading:false,
        testimonials:[],
        error:""
    }


    componentDidMount(){
            this.setState({
                loading:true
            })
           
                fetch('https://backend.techronx.com/api/service', {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    result.json().then(response => {
                        this.setState({
                            services:response.data,
                            loading: false
                        })
                        
                        
                    })
                }).catch(err => {
                    this.setState({
                        loading: false,
                        error:"Something went wrong"
                    });
                   
                });



                fetch('https://backend.techronx.com/api/testimonial', {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    result.json().then(response => {
                        this.setState({
                            testimonials:response.data
                          
                        })
                    })
                }).catch(err => {
                    this.setState({
                        error:"Something went wrong",
                        loading:false
                      
                    })
                });   
    }
    

    render(){
        const details = (
            <div>
            {this.state.services.map((service,index)=> {
                return  <Service key={index} index={index} id={service.id} heading={service.heading} description={service.content} image={service.imageurl}/>
            })}
            </div>
        )

        const testimonial = this.state.testimonials.map((project, index)=> {
            return <Testimonial key={index} imagelink={project.imagelink} serviceid={project.serviceid} company={project.company} />
        })


        const head =(
            <div className="our-services-heading">
                Our Services
                
                <div className="span">
                    <span className="span-1"></span>
                    <span className="span-2"></span>
                </div>
            </div>
        )

        const metaTag = <Helmet>
                            
                           
                            <title>TechronX - India's Best IT Consultancy Services</title>
                            <meta name="title" content="TechronX Information Technology Company"/>
                            <meta name="description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. We apply our digital knowledge to grow your business’s goals and budget to create a scope of work that will help you grow your business. Whether you’re looking to start a website from scratch or want to market your existing website (or both!), we can help."/>
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content="http://www.techronx.com"/>
                            <meta property="og:title" content="TechronX Information Technology Company"/>
                            <meta property="og:description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. We apply our digital knowledge to grow your business’s goals and budget to create a scope of work that will help you grow your business. Whether you’re looking to start a website from scratch or want to market your existing website (or both!), we can help."/>
                            <meta property="og:image" content="%PUBLIC_URL%/logo192.png"/>
                            <meta property="twitter:card" content="summary_large_image"/>
                            <meta property="twitter:url" content="http://www.techronx.com"/>
                            <meta property="twitter:title" content="TechronX Information Technology Company"/>
                            <meta property="twitter:description" content="Techronx is a team with highly experienced backgrounds in web and mobile application development, graphic designing, digital marketing and many more. We apply our digital knowledge to grow your business’s goals and budget to create a scope of work that will help you grow your business. Whether you’re looking to start a website from scratch or want to market your existing website (or both!), we can help."/>
                            <meta property="twitter:image" content="%PUBLIC_URL%/logo512.png" />

                        </Helmet>



            const testimonialConst = <div style={{ margin:'0 2rem',padding:'4rem 2rem', backgroundColor:'white', boxShadow:'0 -5px 5px -5px rgba(0, 0, 0, 0.06)' }}>
               
                        <Carousel
                            slidesPerScroll={2}
                            ltr 
                            autoPlay={2000}
                            stopAutoPlayOnHover
                            slidesPerPage={2}
                            keepDirectionWhenDragging
                            centered
                            offset={0}
                            infinite
                            animationSpeed={2000}
                            breakpoints={{
                                    1000: { 
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
                                    animationSpeed: 2000,
                                    infinite: true,
                                },
                            }}
                    
                        >
                            {testimonial}
                        </Carousel>
                        </div>

                    const loader = <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around', alignItems:'center', height:'90vh'}}> <CircularProgress /> </div>
                    const errMessage =  <div style={{backgroundColor:'red',color:'white', textAlign: "center"}}>{this.state.error}</div>   
                    return(
                        <div className="our-services">
                            
                            {metaTag}
                            {this.state.error ? errMessage : null}
                            <Navbar />
                            <IntroPage />
                            {/* {head} */}
                            {this.state.loading ? loader : <div>{head} {details} </div>}
                            <Familiar />
                            {this.state.loading ? loader : testimonialConst}
                            <Footer />
                        </div>
        )
    }
}

export default Services;