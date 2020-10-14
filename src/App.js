import React, { Fragment } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeroHome from './components/HeroHome';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HeroHome} /> 
        {/* <Route path='/houses' exact component={Houses} /> 
        <Route path='/apartments' exact component={Apartments} />  */}
      </Switch>
      {/* <Footer />  */}
      </BrowserRouter>
      <Card />
    </Fragment>
  );
}

export default App;
