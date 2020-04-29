import React, { Component } from 'react';
import { UserForm } from './Component/UserForm';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import { CssBaseline } from '@material-ui/core';

class Contact extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <CssBaseline />
                <UserForm />
                <CssBaseline />
                <Footer />
            </div>
        )
    }
};

export default Contact;