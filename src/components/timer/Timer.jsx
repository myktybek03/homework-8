import React, { useState, useEffect } from "react"
import styled from "styled-components"

export function Timer() {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (timer >= 60) return
    const count = setInterval(() => {
      setTimer(() => timer + 1)
    }, 1000)
    return () => {
      clearInterval(count)
    }
  }, [timer])
  return (
    <Container>
      <h1>Timer:{timer}</h1>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`
