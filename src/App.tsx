import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './screens/Home';
 
const Checkout = React.lazy( () => import("mfe/HomeMfe"));


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/> 
        <Route path='/test' Component={Checkout}/> 
      </Routes>
    </BrowserRouter>
  );
}


export default App;
