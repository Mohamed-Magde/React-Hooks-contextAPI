import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import  AddEmployee  from './components/AddEmployee';
import  EditEmployee from './components/EditEmployee';


import { GlobalProvider } from './context/GlobalState';
import Home from './components/Home';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployee} exact />
        <Route path="/edit/:id" component={EditEmployee} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;