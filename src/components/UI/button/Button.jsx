import React from "react"
import styled from "styled-components"

export const Button = ({ children, bgColor, disabled, onClick }) => {
  return (
    <StyledButton bgColor={bgColor} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 5px 10px;
  background-color: ${(props) => (props.bgColor ? "#50015f" : "violet")};
  border: none;
  border-radius: 10px;
  color: white;
  :disabled {
    background-color: gray;
  }
`
