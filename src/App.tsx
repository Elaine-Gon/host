import React, { startTransition } from 'react';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import { Dashboard } from './screens';
import { GlobalStyle } from './styles/global';
import { Footer } from './components/footer';

import { FiChevronRight } from "react-icons/fi";
 
const Checkout = React.lazy( () => import("mfe/HomeMfe"));

function Home() {
  const navigate = useNavigate();

  function handle() {
    startTransition( () => {
      navigate("/test") 
    })
  }

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '0px',
    marginLeft: '20px' 
  }

  return (
    <div>
      <Dashboard/>
      <GlobalStyle/>
      <button onClick={handle} style={buttonStyle}>
        <FiChevronRight size={50}/>
      </button>
      <Footer/>
   </div>
  )
}

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
