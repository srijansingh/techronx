import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./userForm.css"
// const useStyles = makeStyles(theme => ({
//   textCenter: {
//     textAlign: 'center'
//   }
// }));

export const Success = () => {
  return (
    <div className="userForm">
      {/* <Header title='Success' /> */}
      <h1>Thank You For Your Submission</h1>
      <p>You will get an email with further instructions</p>
    </div>
  );
};