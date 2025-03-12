import React, { useState } from "react";

const UseStateHook = () =>{
    const [value , setValue] = useState(0);

    const incrementFun = () =>{
        return setValue(value + 1);
    }

    const decrementFun = () =>{
        return setValue(value - 1);
    }
    return(
        <>
        <h1>{value}</h1>
        <button onClick={incrementFun}>Increment</button>
        <button onClick={decrementFun}>Decrement</button>
        </>
    );
}

export default UseStateHook;