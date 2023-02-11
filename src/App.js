import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Form from "./components/Form";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const textHandler = (e) => {
    setNewItem(e.target.value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    if (!newItem) {
      alert("add todo");
      return;
    }
    const item = {
      id: new Date().getTime(),
      text: newItem,
    };

    setItems((oldItems) => [...oldItems, item]);
    console.log(newItem);
    setNewItem("");
    console.log(newItem);
  };

  const deleteHandler = (id) => {
    const newItemList = items.filter((clickedItem) => clickedItem.id !== id);
    setItems(newItemList);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <Form
        clickHandler={clickHandler}
        textHandler={textHandler}
        newItem={newItem}
      />
      <ul>
        {items.map((element) => {
          return (
            <li key={element.id}>
              {element.text}
              <button onClick={(e) => deleteHandler(element.id)}>
                <FaTimes className="delete" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
