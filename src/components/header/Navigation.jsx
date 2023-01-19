import React from "react"
import styled from "styled-components"

export const Navigation = (props) => {
  return (
    <UlStyled>
      <LiStyled onClick={() => props.onChange("users")}>Users</LiStyled>
      <LiStyled onClick={() => props.onChange("timer")}>Timer</LiStyled>
      <LiStyled onClick={props.onClick}>Logout</LiStyled>
    </UlStyled>
  )
}

const UlStyled = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;
  align-items: center;
`

const LiStyled = styled.li`
  border-radius: 25px;
  background: #dd0db0;
  padding: 5px 20px;
  cursor: pointer;
`
