import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Contant = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "This is a Coco-Cola !",
    },
    {
      id: 2,
      checked: false,
      item: "This is a Ice !",
    },
    {
      id: 3,
      checked: false,
      item: "This is a Food !",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelet = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  // const [name, setName] = useState("saif");
  // const [count, setCount] = useState(0);

  // const handleNameChange = () => {
  //   const names = ["Mohammad Saif", "Saqlain Raza", "Harish Zia"];
  //   const int = Math.floor(Math.random() * 3);
  //   setName(names[int]);
  // };

  // const handleClick = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   console.log(count);
  // };

  // const handleClick2 = () => {
  //   console.log(count);
  // };

  // const handleClick3 = (e) => {
  //   console.log(e);
  // };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelet(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}> Your List is Empty.</p>
      )}

      {/* <p onDoubleClick={handleClick}>Hello {name} !</p> 
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button> */}
    </main>
  );
};

export default Contant;
