import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../images/logo192.png";


class Navbar extends Component {

    render() {
        return (
            <div className="landing">
                    <div className="navbar-header">
                <div className="nav-logo">
                    
                    <img src={Logo} alt="nav-logo" />
                </div>
               
                 
                <div className="nav-tool">
                    <NavLink className="navlink nav-hide" to={{pathname:"/"}} exact>Home</NavLink>
                    <NavLink className="navlink nav-hide" to={{pathname:"/blog"}} exact>Blog</NavLink>
                    <NavLink className="navlink nav-hide" to={{pathname:"/about"}} exact>About Us</NavLink>
                    <NavLink className="navlink nav-hide" to={{pathname:"/services"}} exact>Services</NavLink>
                    <NavLink className="navlink nav-hide" to={{pathname:"/contact"}} exact>Contact</NavLink>
                    
                </div>

                {/* <div className="icon-bar">
                    <IconButton color="white">
                        <MenuRoundedIcon style={{color:'white'}} />
                    </IconButton>
                    <Sidebar />
                </div> */}

            </div>
            </div>
            
        )
    }
}

export default Navbar;