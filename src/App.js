import React, { useState } from 'react';
import AddUser from './components/addUser/AddUser';
import AddUserList from './components/addUserList/AddUserList';
import styled from 'styled-components';

function App() {
  const [usersLIst, setUsersList] = useState([])

  //상태끌어올리기 
  const addUserHandler = (username, userAge) => {
    setUsersList((preUsersList) => {
      return [...preUsersList, { name: username, age: userAge }]
    })
  }

  return (
    <AppStyle className="App">
      <AddUser onAddUser={addUserHandler} />
      <AddUserList users={usersLIst} />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  /* margin: 0;
  padding: 0; */
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  position: absolute;
  background: black;

`