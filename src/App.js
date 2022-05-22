import React, { useState } from 'react';
import Navbar from './components/Navigation/Navbar/Navbar';
import Sidebar from './components/Navigation/sidebar/Sidebar';
import AddShops from './components/addShops/AddShops';

// redux


// react router dom 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
function App() {
  const [isopen, setisopen] = useState(false)
  const toggle = () => {
    setisopen(!isopen)
  }



  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/add-shops" element={<AddShops />} />
      </Routes>

    </>
  );
}

export default App;
