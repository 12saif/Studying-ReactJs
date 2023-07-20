import React, { useState } from "react";

const State = () => {
  const [myName, setMyName] = useState("Mohammad");
  const changeName = () => {
    setMyName("Saif");
  };

  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={changeName}>Click Me</button>
    </div>
  );
};

export default State;
