import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import moment from "moment";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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

const styles = theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%',
      backgroundColor:'#090202' // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    avatar: {
        backgroundColor: "black"
      },
  });


class Allbloglist extends Component {
    render() {
        const {classes} = this.props;
        const shareUrl ="https://www.techronx.com/blog/"+ this.props.id;

        return (
              
                <Grid item key={this.props.key}  xs={12} sm={6} md={4}>
                   
                  <Card className={classes.card}>
                  {/* <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <AccountCircleIcon />
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                        
                        </IconButton>
                        }
                        title={this.props.username}
                        subheader={moment(this.props.createdat).fromNow()}
                    /> */}
                    <CardMedia
                      className={classes.cardMedia}
                      image={this.props.thumbnail}
                      title={this.props.heading}
                      href={"/"+this.props.id}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {this.props.heading}
                      </Typography>
                      <Typography>
                       {this.props.content}
                      </Typography>
                    </CardContent>
                     <Button href={"/blog/" + this.props.id} size="medium" color="primary">
                       Learn More
                      </Button>
                    <CardActions disableSpacing>
                     
                      
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

                    </CardActions>
                    
                  </Card>
                </Grid>
          
        )
    }
}

export default withStyles(styles, { withTheme: true })(Allbloglist);