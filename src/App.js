import React, { useState } from 'react';
import Navbar from './components/Navigation/Navbar/Navbar';
import Sidebar from './components/Navigation/sidebar/Sidebar';
// redux
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from "./redux/actions"
function App() {
  const [isopen, setisopen] = useState(false)
  const toggle = () => {
    setisopen(!isopen)
  }
  // redux
  const counter = useSelector((state)=>{
    return state.counterReducer;
  })
  const dispatch = useDispatch();


  return (
    <>
      <Navbar toggle={toggle} />
      {/* <Sidebar isopen={isopen} toggle={toggle} /> */}
      <p>fyntune-shop</p>
      <p>counter {counter}</p>
     <button onClick={()=>dispatch(increment(52))}>increment</button>
     <button onClick={()=>dispatch(decrement())}>decrement</button>
    </>
  );
}

export default App;
