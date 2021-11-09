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
        <NavLink to="/dogindex">Meet All the Dogs</NavLink>
      </ul>
      <ul>
        <NavLink to="/dognew">Add a Dog</NavLink>
      </ul>
      <ul>
        <NavLink to="/notfound">Not Found</NavLink>
      </ul>
    </footer>
  )
  }
}

export default Footer
