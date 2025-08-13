import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <a href="/">Posts</a>
      {' | '}
      <a href="/users">Users</a>
      {' | '}
      <a href="/notifications">Notifications</a>
    </nav>
  )
}

export default Navbar

