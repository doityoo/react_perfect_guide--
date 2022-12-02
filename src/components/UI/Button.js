import React from 'react';
import styled from 'styled-components'

const UserButton = styled.button`
    font: inherit;
    cursor: pointer;
    /* width: auto; */
    margin: 0.5rem 0;
    background: black;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    &:active {
    background: darkgray;
    }
`

const Button = props => {
  return (
      <UserButton type="button">{props.children}</UserButton>
  )
}

export default Button;
