import React, { Component } from 'react'
import Allbloglist from './component/allbloglist';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/footer';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import './allblog.css';
import Introblog from './component/introblog';

import CircularProgress from '@material-ui/core/CircularProgress';
const styles = theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
});


class Allblog extends Component {

    constructor(){
        super();
        this.state={
            posts : [],
            loading:false,
            error:null

        }
    }
    
   
    componentDidMount(){
        this.setState({
            loading: true
        })
        axios.get('https://backend.techronx.com/posts')
        .then(response => {
            console.log(response.data)
            this.setState({
                posts: response.data.data,
                loading: false
            });
        })
        .catch((err)=> {
            this.setState({
                error:"Something went wrong.",
                loading: false
            })
        });
    }

    render() {
        const classes = this.props;

        const allbloglist = this.state.posts.map((blog,index)=>{
            return <Allbloglist key={index} username={blog.name}  heading={blog.heading} keywords={blog.keyword} thumbnail={blog.thumbnail} content={ReactHtmlParser(blog.content.substring(0, 100))} id={blog.id} createdat={blog.created}/> 
        })

        // const loader = <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around', alignItems:'center', height:'90vh'}}> <CircularProgress /> </div>


        return (
            <div>
                {this.state.error === null ? null : <div style={{backgroundColor:'red',color:'white',height:'2rem',textAlign: "center"}}>{this.state.error}</div>} 
                <Navbar />
                <Introblog />
                {this.state.error===null ?
                <main className="allblog">
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
               
                        {allbloglist}
                   
                    </Grid>
                </Container>
                </main>
                :
            null
                
    }
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Allblog)