import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom' 

// 
import { url } from './adapter/common';
// import AuthRoute from './components/authRoute';


// Onboard
import SignIn from "./pages/onboard/sign_in.js";
import SignUp from "./pages/onboard/sign_up.js";
import Forgot from "./pages/onboard/forgot_password.js";


// Dashboard
import Dashboard from "./pages/dashboard/index";
import Events from "./pages/dashboard/events";
import Success from "./pages/dashboard/success";

function App() {
  return (
    <Router>
      <Switch>
            
        {/*onboard route*/}
          <Route path={url.home} exact component={SignIn} />
					<Route path={url.signUp} exact component={SignUp} />   
          <Route path={url.forgotP} exact component={Forgot} />
        
        {/*dashboard route*/}
        <Route path={url.dashHome} exact component={Dashboard} />
        <Route path={url.events} exact component={Events} />
        <Route path={url.success} exact component={Success} />

      </Switch>
    </Router> 
  );
}

export default App;
