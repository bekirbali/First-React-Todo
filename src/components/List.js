import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const List = ({ deleteHandler }) => {
  const [items, setItems] = useState([]);
  return (
    <div>
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
    </div>
  );
};

export default List;
