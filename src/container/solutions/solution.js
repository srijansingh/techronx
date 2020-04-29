import React, { Component } from 'react'
import SolutionIntro from './Component/intro';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import Solutions from './Component/solutions';
import Carousel from '@brainhubeu/react-carousel';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Testimonial from './Component/testimonial';


const styles = theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
});

class Solution extends Component {
    state={
        service:[],
        testimonials:[],
        heading:null,
        content:null,
        imageurl:null,
        loading:false
    }

    componentDidMount(){

                fetch('https://backend.techronx.com/api/services/'+this.props.match.params.serviceid, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    result.json().then(response => {
                        this.setState({
                            heading:response.data.heading,
                            content:response.data.content,
                            imageurl:response.data.imageurl,
                            loading: false
                        })
                        
                        
                    })
                }).catch(err => {
                    this.setState({
                        loading: false,
                        error: err
                    });
                });

                fetch('https://backend.techronx.com/api/service/'+this.props.match.params.serviceid, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }).then(result => {
                    result.json().then(response => {
                        this.setState({
                            service:response.data,
                            loading: false
                        })
                    })
                }).catch(err => {
                    this.setState({
                        loading: false,
                        error: err
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
                            testimonials:response.data,
                            loading: false
                        })
                    })
                }).catch(err => {
                    this.setState({
                        loading: false,
                        error: err
                    });
                });
    }

    render() {
        const {classes}= this.props;

        const Solution = this.state.service.map((service,index)=> {
            return <Solutions key={index} heading={service.heading} thumbnail={service.imagelink} content={service.description} />
        })

        const testimonial = this.state.testimonials.map((project, index)=> {
            return <Testimonial key={index} imagelink={project.imagelink} serviceid={project.serviceid} company={project.company} />
        })

        const head =(
            <div className="our-services-heading">
                Our Projects
                
                <div className="span">
                    <span className="span-1"></span>
                    <span className="span-2"></span>
                </div>
            </div>
        )

        return (
            <div style={{backgroundColor:'rgb(234, 247, 251)'}}>
                <Navbar />
                <SolutionIntro heading={this.state.heading} content={this.state.content} imageurl={this.state.imageurl}/>
                <Container  className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={5}>
               
                        {Solution}
                   
                    </Grid>
                </Container>
                {head}
                <div style={{ margin:'0 2rem',padding:'4rem 2rem', backgroundColor:'white', boxShadow:'0 -5px 5px -5px rgba(0, 0, 0, 0.06)' }}>
               
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
                            centered: false,
                            //   arrowLeft: (<Icon className="icon-example" name="arrow-left" />),
                            //   arrowRight: (<Icon className="icon-example" name="arrow-right" />),
                            animationSpeed: 2000,
                            infinite: true,
                        },
                    }}
            
                >
                    {testimonial}
                </Carousel>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Solution)