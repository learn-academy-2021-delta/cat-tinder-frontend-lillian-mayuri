import React, { Component } from 'react'
import saddog from '../assets/sad-dog.png'

class NotFound extends Component {
  render() {
    return (
      <div className="page-body">
        <h1>Sorry no dogs here!</h1>
        <br />
        <img src={saddog} alt="portrait of a dog on leash" className="saddog" />
     
      </div>
    )
  }
}
export default NotFound
