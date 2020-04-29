import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import "./userForm.css";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  textCenter: {
    textAlign: 'left'
  },
  button: {
    margin: theme.spacing(4)
  }
}));

export const Confirm = ({ formData, prevStep, error,fileSubmit,submit }) => {
  const classes = useStyles();
  const { name, email, phonenum, occupation, city } = formData;

  const errMessage = <div style={{padding:'0.7rem 1.5rem', boxShadow:'0px 0px 3px 1px #ccc', background:'white', color:'red', borderRadius:'5px',fontWeight:'bold', textAlign:'center'}}>Something went wrong. Please try again</div>


  return (
    <div className="userForm">
      {error ? errMessage : null}
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary='Your Name'
              secondary={name}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Email'
              secondary={email}
              className={classes.textCenter}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary='Phone Number'
              secondary={email}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Your project description'
              secondary={occupation}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='City'
              secondary={city}
              className={classes.textCenter}
            />
          </ListItem>
        </List>
        <div className={classes.textCenter}>
          <Button
            color='secondary'
            variant='contained'
            className={classes.button}
            onClick={() => prevStep()}
            style={{width:'120px',padding:'1rem 0',backgroundColor:'#a6a6a6', color:'black',marginTop:'4rem'}}
          >
            Back
          </Button>
          <Button
            color='primary'
            variant='contained'
            className={classes.button}
            onClick={() => fileSubmit()}
            disabled={submit}
            style={{width:'170px',padding:'1rem 0',background:'black',marginTop:'4rem'}}
          >
            {submit ? <CircularProgress size={22}  thickness={6}/> : 'Submit'}
          </Button>
        </div>
      </div>
    </div>
  );
};

Confirm.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  fileSubmit: PropTypes.func.isRequired
};