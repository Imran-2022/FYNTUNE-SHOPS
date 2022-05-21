import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addtoCart } from "../../redux/actions"
const Home = () => {
    // redux
    const counter = useSelector((state) => {
        return state.counterReducer;
    })
    const storeLength = useSelector((state) => {
        return state.stores;
    })
    const dispatch = useDispatch();
    return (
        <>
            <p>fyntune-shop</p>
            <p>counter {counter}</p>
            <button onClick={() => dispatch(increment(52))}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <p>length of the stores {storeLength.length}</p>
            <button onClick={() => dispatch(addtoCart('this is add to cart',`${counter}`))}>add to cart</button>
        </>
    );
};

export default Home;