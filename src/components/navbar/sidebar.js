import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
class Sidebar extends Component{

    render(){
        return(
                        
                <div className="sidebar-tool">

                    <div className="sidebar">
                        <NavLink className="nav-link" to={{pathname:"/"}} exact>Home</NavLink>
                        <NavLink className="nav-link" to={{pathname:"/resources"}} exact>Resources</NavLink>
                        <NavLink className="nav-link" to={{pathname:"/about"}} exact>About Us</NavLink>
                        <NavLink className="nav-link" to={{pathname:"/services"}} exact>Services</NavLink>
                        <NavLink className="nav-link" to={{pathname:"/contact"}} exact>Contact</NavLink>
                    </div>
                </div>
               
               
        
        )
    }
}
export default Sidebar;