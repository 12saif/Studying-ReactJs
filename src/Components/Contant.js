import React from "react";

const Contant = () => {
  const handleNameChange = () => {
    const names = ["Mohammad Saif", "Saqlain Raza", "Harish Zia"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <main>
      <p>Hello {handleNameChange()} !</p>
    </main>
  );
};

export default Contant;
