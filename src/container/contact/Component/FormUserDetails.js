import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import Typography from '@material-ui/core/Typography';

import "./userForm.css"

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border:'2px solid black',
    borderRadius:'5px',
    minHeight:'500px',
    height:'100%',
    padding:'2rem 0',
    color:'black'

  },
  button: {
    margin: theme.spacing(4),
   
  }
}));

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .max(20),
  phonenum: yup
    .string()
    .required('Phone number is required')
    .max(12),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
});

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  const classes = useStyles();
  return (
    <div className="userForm">
      {/* <Header title='Enter User Details' /> */}

      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <Typography gutterBottom variant="h5" component="h2">
                      Enter Your Details
            </Typography>
            <Field
              name='name'
              label='Enter Your Name *'
              margin='normal'
              as={TextField}
              variant="outlined"
              error={touched.name && errors.name}
              helperText={touched.name && errors.name}
              style={{width:'310px'}}
            />
            
            <Field
              type='email'
              name='email'
              label='Enter Your Email *'
              margin='normal'
              as={TextField}
              variant="outlined"
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
              style={{width:'310px'}}
            />

            <Field
              name='phonenum'
              label='Enter Phone Number *' 
              margin='normal'
              as={TextField}
              variant="outlined"
              error={touched.phonenum && errors.phonenum}
              helperText={touched.phonenum && errors.phonenum}
              style={{width:'310px'}}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              style={{width:'310px', padding:'1rem 0',backgroundColor:'black',marginTop:'4rem'}}
            >
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormUserDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};