import React, { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState("");

  function onChangeHandler(event) {
    console.log(event.target.value, "event");

    const result = event.target.value;
    setUserInput(result);
  }
  return (
    <div>
      <form>
        <label>
          Please enter the product name :
          <input type="text" name="name" onChange={onChangeHandler} />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  );
}
