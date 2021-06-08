import React from "react";

const Counter = (props) => {
  console.log(props.value);
  return (
    <>
      <div>
        <p>Counter</p>
        <p>{props.value.value}</p>
        <button onClick={props.incrementHandler}> Increment </button>
        <button onClick={props.decrementHandler}> Decrement </button>
        <button onClick={props.increment2Handler}>Increment After 2 Sec</button>
      </div>
    </>
  );
};

export default Counter;
