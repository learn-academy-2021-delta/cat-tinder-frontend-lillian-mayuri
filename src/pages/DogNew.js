import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class DogNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      }
    }
  }
  handleChange = (e) => {
      let { form } = this.state
      form[e.target.name] = e.target.value
      this.setState({form: form})
    }

    handleSubmit = () => {
      this.props.createNewDog(this.state.form)
      this.setState({submitted: true})
    }

  render() {
    console.log(this.state.form)
    return (
      <>
      <div className="catnew-container">
        <h1>I am the Dog New</h1>
        <Form>
          <FormGroup>
            <Label for="name">
              Dog's Name
            </Label>
            <Input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">
              Dog's Age
            </Label>
            <Input
              name="age"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">
              Dog's Hobbies & Enjoyment
            </Label>
            <Input
              name="enjoys"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.enjoys}
            />
          </FormGroup>
        </Form>
          <Button
            name="submit"
            onClick={this.handleSubmit}
            >
            Add a New Dog
          </Button>
          {this.state.submitted && <Redirect to="/dogindex" />}
        </div>
      </>
    )
  }
}

export default DogNew
