import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const textHandler = (e) => {
    setNewItem(e.target.value);
  };
  const item = {
    id: new Date().getTime(),
    text: newItem,
  };
  const clickHandler = (e) => {
    e.preventDefault();
    if (!newItem) {
      alert("add item");
      return;
    }

    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  };

  const deleteHandler = (id) => {
    const newItemList = items.filter((clickedItem) => clickedItem.id !== id);
    setItems(newItemList);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <form action="">
        <input type="text" onChange={textHandler} value={newItem} />
        <button type="submit" onClick={clickHandler}>
          Add
        </button>
      </form>
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
