import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import dogLogo from '../assets/doglogo64.png'

class Header extends Component {
  render() {
    return (
      <header>
      <NavLink to="/">
        <img src={dogLogo} alt="logo for DogTinder" className="doglogo64"/>
      </NavLink>
      <div className="nav-links">
        <ul>
          <NavLink to="/dogindex">Meet the Cats</NavLink>
        </ul>
        <ul>
          <NavLink to="/dognew">Add a Cat</NavLink>
        </ul>
        <ul>
          <a target='blank'href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter" id="aspca">Adopt a Dog!</a>
        </ul>
      </div>
    </header>
  )
  }
}

export default Header
