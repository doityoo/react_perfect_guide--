import React from 'react';
import Card from './Card';
import Button from './Button';
import styled from 'styled-components';

const ErrorModal = props => {
  return (
    <BackDrop onClick={props.onHandlerError}>
      <Modal>
        <Card>
          <header>
            <h2>{props.title}</h2>
          </header>
          <div>
            <p>
              {props.message}
            </p>
          </div>
          <footer>
            <Button onClick={props.onHandlerError}>닫기</Button>
          </footer>
        </Card> 
      </Modal>
    </BackDrop>
  )
}

export default ErrorModal;


const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`

const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  right: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  
  & header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: #4f005f;
    padding: 1rem;
    position: relative;

  }

  & h2 {
    margin: 0;
    color: white;
  }

  & p {
    padding: 1rem;
  }

  & footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media(min-width: 768px) {
      left: calc(50%-20rem);
      width: auto;
  }
`