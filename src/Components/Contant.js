import React from "react";

const Contant = () => {
  const handleNameChange = () => {
    const names = ["Mohammad Saif", "Saqlain Raza", "Harish Zia"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("Cliked is Work");
  };

  const handleClick2 = (name) => {
    console.log(`${name} Was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e);
  };

  return (
    <main>
      <p>Hello {handleNameChange()} !</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => handleClick2("Mohammad Saif")}>Click it</button>
      <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  );
};

export default Contant;
