import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [val, setVal] = useState(0);


  const computedValue = useMemo(() => {
    console.log("Computing value...");
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum;
  }, [val]); 

  return (
    <>
      <h1>Use Memo Hook</h1>
      <h2>Value: {val}</h2>
      <h3>Computed Value: {computedValue}</h3>
      <button onClick={() => setVal(val + 1)}>Increment</button>
    </>
  );
};

export default UseMemoHook;
