import { useState } from "react";

const UseStateObject = () => {
  const peter = {
    name: "peter",
    age: 24,
    hobby: "reading",
  };
  const [person, setPerson] = useState(peter);

  const showJohn = () => {
    // setPerson({
    //   name: "neo",
    //   age: 19,
    //   hobby: "gym",
    // });
    setPerson({ ...person, name: "newname" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>enjoys: {person.hobby}</h4>
      <button type="button" onClick={showJohn} className="btn">
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
