import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearList = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
            <button onClick={() => removeItem(person.id)}>remove</button>
          </div>
        );
      })}
      <button onClick={clearList}>clearList</button>
    </div>
  );
};

export default UseStateArray;
