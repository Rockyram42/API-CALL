import React from 'react';
import SignIn from './signin'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Switch, Route} from 'react-router-dom'
// import Dashboard from './dashboard'
import View from './view'

function App(){
    return (
     <BrowserRouter >
     <Switch>
      <Route exact path="/" component ={SignIn}/>
      <Route  path="/view" component ={View}/>
     </Switch>
     </BrowserRouter>
     );
  }

export default App;
