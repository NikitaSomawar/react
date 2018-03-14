/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route ,BrowserRouter as Router} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Bhive from 'containers/Bhive';
import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import KashIntro from 'containers/KashIntro/Loadable';
import Eligibility from 'containers/Eligibility/Loadable';
import AddBank from 'containers/AddBank';
import '../../css/firebaseui.css';
import '../../css/krazyglyphs.css';
import  lookUpIFSC  from 'containers/AddBank/childcomponent/lookupifsc';
import Form from 'containers/Form';

export default function App() {
  return (
    <div>
      <Bhive />
      <Router history={browserHistory}> 
      <Switch>
        <Route exact path="/home/:whichscreen" component={HomePage} />
        <Route exact path="/intro" component={KashIntro} />
        <Route exact path="/eligibility/:whichscreen" component={Eligibility} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addbank" component={AddBank} />
        <Route exact path="/lookupifsc" component={lookUpIFSC} />
        <Route exact path="/form" component={Form} />
        <Route component={NotFoundPage} />
      </Switch>
     </Router>
    </div>
  );
}


