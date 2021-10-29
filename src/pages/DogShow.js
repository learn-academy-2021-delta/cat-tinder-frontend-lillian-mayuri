import React, { Component } from 'react'

class DogShow extends Component {
  render() {
    return (
      <>
         <h3>Dog Details</h3>
        { this.props.dog &&
          <>
            <p>{this.props.dog.name}</p>
            <p>{this.props.dog.age}</p>
            <p>{this.props.dog.enjoys}</p>
          </>
        }
      </>
    )
  }
}

export default DogShow
