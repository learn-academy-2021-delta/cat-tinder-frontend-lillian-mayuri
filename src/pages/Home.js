import React, { Component } from 'react'
import pinkbow from '../assets/pink bow.png'

class Home extends Component {
  render() {
    return (
      <>
        <h1>Welcome to Dog Tinder!</h1>
        <br />
        <img src={pinkbow} alt="portrait of a dog on leash" className="pinkbow" />
      </>
    )
  }
}

export default Home
