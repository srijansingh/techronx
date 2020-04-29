import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import "./bloglist.css"


const styles = theme => ({
    root: {
      display: 'flex',
      maxMidth:'400px',
      width:'100%'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });


class Bloglist extends Component {
  state={
    clicked:false
  }

    render() {

        return (
            <div className="root-bloglist" onClick={this.props.click} >
               <div className="image-bloglist">
                   <img src={this.props.thumbnail} alt={this.props.heading} />
               </div>
               <div className="heading-bloglist">
                {this.props.heading}
               </div>
              </div>
          );
    }
}

export default withStyles(styles, { withTheme: true })(Bloglist);
