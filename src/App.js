import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom' 

// 
import { url } from './adapter/common';
// import AuthRoute from './components/authRoute';

// Homepage
// import OneShare from "./pages/home/index.js";

// Onboard
import SignIn from "./pages/onboard/sign_in.js";
import SignUp from "./pages/onboard/sign_up.js";
// import Forgot from "./pages/onboard/forgot_password.js";

// Dashboard
// import Home from "./pages/dashboard/home.js";
// import AdminHome from "./pages/dashboard/admin_home.js";

// Dashboard


function App() {
  return (
    <Router>
      <Switch>
            
          {/* onboard route*/}
          <Route path={url.signIn} exact component={SignIn} />
					<Route path={url.signUp} exact component={SignUp} />   

      </Switch>
    </Router> 
  );
}

export default App;
