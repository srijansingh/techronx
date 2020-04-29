import React,{Component} from 'react';

import 'react-activity/dist/react-activity.css';
import { Route, Switch} from 'react-router-dom';
import Services from "./container/services/services";
import Aboutus from "./container/aboutus/aboutus";
import Work from "./container/work/work";
import Solution from './container/solutions/solution';
import Contact from './container/contact/Contact';
import Allblog from './container/blogging/container/allblog';
import Blogging from './container/blogging/blogging';
import Termsandcondition from './components/policy/termsandcondition';
import Privacypolicy from './components/policy/privacypolicy';


class Techronx extends  Component {
    render() {
        return (
            <div>
                
                <Switch>
                    
                    <Route path="/" exact component={Services} /> 
                    <Route path="/about" exact component={Aboutus} /> 
                    <Route path="/services" exact component={Work} /> 
                    <Route path="/contact" exact component={Contact} /> 
                    <Route path="/techronx/:serviceid" component={Solution} />
                    <Route path="/blog" exact component={Allblog} />
                    <Route path="/blog/:id" exact component={Blogging} />
                    <Route path="/termscondition" exact component={Termsandcondition} />
                    <Route path="/privacypolicy" exact component={Privacypolicy} />
                  
                </Switch>
                
                
            </div>  
        )
    }
}

export default Techronx;