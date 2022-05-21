import React, { useState } from 'react';
import Navbar from './components/Navigation/Navbar/Navbar';
import Sidebar from './components/Navigation/sidebar/Sidebar';

function App() {
  const [isopen, setisopen] = useState(false)
  const toggle = () => {
    setisopen(!isopen)
  }
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <p>fyntune-shop</p>
    </>
  );
}

export default App;
