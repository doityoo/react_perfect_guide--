import React from "react";
import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState } from "react"


const AddUser = props => {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = e => {
    e.preventDefault();
    console.log(enteredUserName, enteredAge)
    setEnteredUsername("");
    setEnteredAge("");
  }

  const changeUsernameHandler = e => {
    setEnteredUsername(e.target.value);
  }

  const changeAgeHandler = e => {
    setEnteredAge(e.target.value)
  }

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={changeUsernameHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          //value={state}가 들어가야 입력 후 비우기가 가능함
          onChange={changeAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;

