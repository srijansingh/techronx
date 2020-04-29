import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Helmet} from 'react-helmet';

const  styles = theme => ({
  root: {
    maxWidth:'100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class SingleBlog extends Component{

    // componentDidMount(){
    //   console.log(this.props.keyword)
    // }

    render(){
     
        const {classes} = this.props;


        const metaTag = <Helmet>

              <title>{this.props.heading}</title>
              <meta name="title" content={this.props.heading}/>
              <meta name="description" content={this.props.content}/>

      
              <meta property="og:type" content="website"/>
              <meta property="og:url" content={window.location.href}/>
              <meta property="og:title" content={this.props.heading}/>
              <meta property="og:description" content={this.props.content}/>
              <meta property="og:image" content={this.props.thumbnail}/>

    
              <meta property="twitter:card" content="summary_large_image"/>
              <meta property="twitter:url" content={window.location.href}/>
              <meta property="twitter:title" content={this.props.heading}/>
              <meta property="twitter:description" content={this.props.content}/>
              <meta property="twitter:image" content={this.props.thumbnail} />
        </Helmet>

        return (
          <div>
           {metaTag}
            <Card className={classes.root}>
            <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.heading}
                    </Typography>
                </CardContent>
              <CardContent>
                <Typography>
                   {this.props.content}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
            </div>
          );
    }
} 

export default withStyles(styles, { withTheme: true })(SingleBlog);
  