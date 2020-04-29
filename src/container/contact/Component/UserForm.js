import React, { useState } from 'react';
import { FormUserDetails } from './FormUserDetails';
import { FormPersonalDetails } from './FormPersonalDetails';
import { Confirm } from './Confirm';
import { Success } from './Success';

export const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phonenum: '',
    email: '',
    occupation: '',
    city: ''
  });
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const [submitting,setSubmitting] = useState(false)
  const [err,setErr] = useState(false)
  const fileSubmit = () => {
    setSubmitting(true)
    setErr(false)
    fetch('https://backend.techronx.com/contact', {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  }).then(result => {
      result.json().then(response => {
          setSubmitting(false)
         
      }).then(()=> setStep(prev => prev + 1) )
  }).catch(err => {
      setSubmitting(false)
      setErr(true)
  });
  }

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Confirm formData={formData} error={err} submit={submitting} nextStep={nextStep} prevStep={prevStep} fileSubmit={fileSubmit}/>
      );
    default:
      return <Success />;
  }
};