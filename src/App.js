import React,{Component} from 'react';
import Techronx from "./Techronx";
import {BrowserRouter} from "react-router-dom";
import "./App.css";

class App extends Component {

  render() {
    return (
    <BrowserRouter>
        <div className="App">
         <Techronx />
        </div>
      </BrowserRouter>
      )
  }
}

export default App;
