import React from "react"
import { Users } from "../users/Users"
import { Timer } from "../timer/Timer"
import { Card } from "../UI/card/Card"

const MainContent = (props) => {
  return (
    <Card>
      {props.currentPage === "users" && <Users />}
      {props.currentPage === "timer" && <Timer />}
    </Card>
  )
}

export default MainContent
