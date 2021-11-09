import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class DogIndex extends Component {
  render() {
    return (
      <>
        <h1>Meet our Dog Friends</h1>
        {this.props.dogs && this.props.dogs.map(dog => {
          return (
            <p key={dog.id}>
              <NavLink to={`/dogshow/${dog.id}`}>
                {dog.name}
              </NavLink>
            </p>
          )
        })}
      </>
    )
  }
}
export default DogIndex