import React, { startTransition } from 'react';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';

const Checkout = React.lazy( () => import("mfe/HomeMfe"));

function Home() {
  const navigate = useNavigate();

  function handle() {
    startTransition( () => {
      navigate("/test") 
    })
  }

  return (
    <div>
      <button onClick={handle}>
        Teste
      </button>
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
