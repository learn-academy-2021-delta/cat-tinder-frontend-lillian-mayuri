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
          <NavLink to="/dogindex">Meet the Dogs</NavLink>
        </ul>
        <ul>
          <NavLink to="/dognew">Add a Dog</NavLink>
        </ul>
        <ul>
          <a target='blank'href="https://www.aspca.org/nyc/aspca-adoption-center/adoptable-dogs" id="aspca">Adopt a Dog!</a>
        </ul>
      </div>
    </header>
  )
  }
}

export default Header
