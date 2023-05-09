import React, { useState } from "react";

export default function SearchForm({ setUserInput }) {
  // this search form is for user typing,whatever they type we can accept here
  //const [form, setForm] = useState("");

  function onChangeHandler(event) {
    //setForm(event.target.value) but in this case userInput is in the App ,so we need to call setUserInput here so that the value can be updated
    setUserInput(event.target.value);
  }
  return (
    <div>
      <form>
        <label>user input</label>
        <input type="text" name="userInput" onChange={onChangeHandler} />
      </form>
    </div>
  );
}
