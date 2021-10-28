import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
      <ul>
        <NavLink to="/">&copy; 2021 Lillian & Mayuri</NavLink>
      </ul>
      <ul>
        <NavLink to="/catindex">Meet All the Dogs</NavLink>
      </ul>
      <ul>
        <NavLink to="/catnew">Add a Dog</NavLink>
      </ul>
    </footer>
  )
  }
}

export default Footer
