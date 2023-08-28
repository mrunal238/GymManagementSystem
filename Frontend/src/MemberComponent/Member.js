import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";


import {useHistory} from 'react-router-dom'
import MembNavbar from '../NavbarComponent/MemberNavbar';

import HealthStat from './HealthStatus'
import MemberProfileComponents from './MemberProfile';
import SubscriptionplanComponents from './SubscriptionPlanDisplay';
import MemberDietComponents from './MemberDietPlan';
import MemberWorkoutComponents from './MemberWorkoutPlan';
import MemberOrderComponents from './MemberOrder';
import CreateGymMemeberComponent from './MembershipForm';



 const Member =() =>{

    const history = useHistory();

  

    const logout = () => {
        
        localStorage.removeItem('member_name')
        localStorage.removeItem('member_email')
        localStorage.removeItem('member_contact')
        localStorage.removeItem('member_address')
        localStorage.removeItem('member_password')
        localStorage.removeItem('member_role')
        history.push('/login')
        
    }
    

        return (
            <div>
                
                <Router>

                <MembNavbar/>   

                <div className="container">
                <h1 style={{textAlign:'center'}}> Hello Member, {localStorage.getItem('member_name')}</h1>
                </div> 

                
                <Switch>

              
                <Route  path="/memberprofile" component={MemberProfileComponents}/> 
                <Route  path="/healthstatus" component={HealthStat}/>
                <Route  path="/membsubplan" component={SubscriptionplanComponents}/>
                <Route  path="/membdietplan" component={MemberDietComponents}/>
                <Route  path="/membworkoutplan" component={MemberWorkoutComponents}/>
                <Route  path="/memberorder" component={MemberOrderComponents}/>
                <Route  path="/membform" component={CreateGymMemeberComponent}/>
               
            
                </Switch>
                </Router>

                
                <br/>
                <br/>
                <button className="btn btn-success" onClick={logout}>Sign Out</button>
                <br/>
                <br/>
                
               
            </div>
        )
    
}

export default Member