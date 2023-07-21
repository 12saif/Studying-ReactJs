import React, { useState } from "react";

const State = () => {
  const [myName, setMyName] = useState("Mohammad");
  const [count, setCount] = useState(0);

  const changeName = () => {
    setMyName("Saif");
  };

  return (
    <>
      <div>
        <h1>{myName}</h1>
        <button onClick={changeName}>Click Me</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increse</button>==
        <button
          onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
        >
          Decrese
        </button>
      </div>
    </>
  );
};

export default State;
