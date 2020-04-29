import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import "./userForm.css";

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexWrap:'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border:'2px solid black',
    borderRadius:'5px',
    minHeight:'500px',
    height:'100%', 
    padding:'2rem 0'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export const FormPersonalDetails = ({
  formData, 
  setFormData,
  nextStep,
  prevStep
}) => {
  const classes = useStyles();
  const [direction, setDirection] = useState('back');
  return (
    <div className="userForm">
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          direction === 'back' ? prevStep() : nextStep();
        }}
      >
        <Form className={classes.form}>
        <Typography gutterBottom variant="h5" component="h2">
                    Provide some more details
            </Typography>
          <Field
            name='occupation'
            label='Tell us about your project?'
            margin='normal'
            as={TextField}
            multiline
          rows="4"
          variant="outlined"
            style={{width:'320px'}}
          />
          <Field name='city' label='City you belong to' margin='normal' as={TextField}  variant="outlined" style={{width:'320px'}}/>
          <div>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={() => setDirection('back')}
              style={{width:'120px',padding:'1rem 0',backgroundColor:'black',marginTop:'4rem'}}
            >
              Back
            </Button>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={() => setDirection('forward')}
              style={{width:'170px',padding:'1rem 0',backgroundColor:'black',marginTop:'4rem'}}
            >
              Continue
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

FormPersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};