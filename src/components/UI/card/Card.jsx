import React from "react"
import styled from "styled-components"

export const Card = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  padding: 2rem 1.5rem;
  -webkit-box-shadow: -8px 8px 12px 6px rgba(140, 143, 144, 0.27);
  -moz-box-shadow: -8px 8px 12px 6px rgba(140, 143, 144, 0.27);
  box-shadow: -8px 8px 12px 6px rgba(140, 143, 144, 0.27);
  width: 650px;
  margin: 10px auto;
  border-radius: 5px;
`
