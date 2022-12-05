import React from "react";
import Card from "../UI/Card"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal";
import { useState, useRef } from "react"


const AddUser = props => {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const inputCursor = useRef();

  const addUserHandler = e => {
    e.preventDefault();
    if (enteredUserName.trim().length === 0) {
      alert("Username을 입력해 주세요");
      return;
    }
    if (enteredAge.trim().length === 0) {
      alert("Age을 입력해 주세요");
      return;
    }
    // +는 문자열을 숫자로 바꾼다. age state를 문자열로 받고 있기 때문
    if (+enteredAge < 1) {
      alert("age가 0보다 커야 합니다");
      return;
    }
    // console.log(enteredUserName, enteredAge)
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
    inputCursor.current.focus();

  }

  const changeUsernameHandler = e => {
    setEnteredUsername(e.target.value);
  }

  const changeAgeHandler = e => {
    setEnteredAge(e.target.value)
  }

  return (
    <div>
      {/* <ErrorModal title="An error occured!" contents="Something went wrong!" />  */}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={changeUsernameHandler}
            ref={inputCursor}
          />
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
    </div>
  )
}

export default AddUser;

