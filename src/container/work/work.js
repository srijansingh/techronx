import React, {Component} from "react";
import "./work.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import WorkService from "./Components/work-service";
import WorkIntro from "./Components/work-intro";
import WorkWithus from "./Components/work-withus";
class Work extends Component{
    render(){
        return(
            <div className="work-main">
                <Navbar />
                <WorkIntro />
                <WorkService />
                <WorkWithus/>
                <Footer />
            </div>
        )
    }
}

export default Work;