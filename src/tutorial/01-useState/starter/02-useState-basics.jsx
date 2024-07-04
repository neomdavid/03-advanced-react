import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState("hello")[1];
  // const func = useState("hello")[1];
  // console.log(value);
  //  console.log(func);
  let [count, setCount] = useState(0);
  const handleClick = () => {};

  return (
    <>
      <h4>You clicked {count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click here
      </button>
    </>
  );
};

export default UseStateBasics;
