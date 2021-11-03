import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class DogShow extends Component {
 render() {
   let {dog} = this.props
   return (
     <div className="page-body">
       {dog &&
        <Card body className="card-show">
          <CardTitle tag="h5">Hi! My name is {dog.name}</CardTitle>
          <h2>🐕</h2>
          <CardText>I am {dog.age} years old</CardText>
          <CardText>I enjoy {dog.enjoys}</CardText>
          <NavLink to={`/dogedit/${dog.id}`}>
            <Button>Edit Dog Profile</Button>
          </NavLink>
          <br />
          <NavLink to="/dogindex">
            <Button onClick={() => this.props.deleteDog(dog.id)}>
              Delete Dog Profile
            </Button>
          </NavLink>
        </Card>
       }
     </div>
   )
 }
}
export default DogShow