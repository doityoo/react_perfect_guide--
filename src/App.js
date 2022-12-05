import React, { useState } from 'react';
import AddUser from './components/addUser/AddUser';
import AddUserList from './components/addUserList/AddUserList';
import styled from 'styled-components';

function App() {
  const [usersLIst, setUsersList] = useState([])

  //상태끌어올리기 
  const addUserHandler = (username, userAge) => {
    setUsersList((preUsersList) => {
      return [...preUsersList, { name: username, age: userAge, id:Math.random().toString() }]
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
/* 배경 상하 좌우 스크롤 없애기  */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  position: absolute;
  background: black;

`