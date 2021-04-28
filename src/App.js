import React from 'react';
import 'antd/dist/antd.css'
import {
    BrowserRouter,
    Switch,
    Route,
    
  } from "react-router-dom";
import Home from './components/Home'
import Dashboard from './components/Menu/Dashboard.menu';

const App = () => {
    return (
        <BrowserRouter>
         <Switch>
          <Route exact path='/' component={Home} /> 
         <Route path='/dashboard' component={Dashboard} /> 
        </Switch>
        </BrowserRouter>
        
    )
};
export default App;