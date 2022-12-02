import React from "react";
import Card from "../UI/Card"
import Button from "../UI/Button"
// import styled from "styled-components"


const AddUser = props => {
  const addUserHandler = e => {
    e.preventDefault();
  }
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username" />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          name="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;

