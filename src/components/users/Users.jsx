import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"

export const Users = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPosts(data)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <Text>
      <h1>Users</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Text>
  )
}

const Text = styled.div`
  text-align: center;
`
