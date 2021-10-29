import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Sorry no dogs here!</h3>
        <ul>
        <NavLink to="/">Return to Home Page</NavLink>
      </ul>
      </div>
    )
  }
}
export default NotFound
