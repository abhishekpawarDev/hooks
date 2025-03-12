import React, { useState , useEffect } from "react";

const UseEffectHook = () =>{
    const [val , setVal] = useState(0);

    useEffect(() => {
      console.log("UseEffectHook Call")
    
      return () => {
        console.log("UseEffect Hook Return Call");
      }
    }, [val])
    
    return(
        <>
        <h1>UseEffectHook</h1>
        <h1>{val}</h1>        
        <button onClick={()=>setVal(val + 1)}>Increment</button>
        <button onClick={()=>setVal(val - 1)}>Decrement</button>
        </>
    );
}

export default UseEffectHook;