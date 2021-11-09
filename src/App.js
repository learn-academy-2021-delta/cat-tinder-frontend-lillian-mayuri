import React, { Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DogIndex from './pages/DogIndex'
import DogShow from './pages/DogShow'
import DogNew from './pages/DogNew'
import DogEdit from './pages/DogEdit'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dogs:[]
    }
  }

  componentDidMount(){
   this.readDog()
 }

 readDog = () => {
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(dogArray => this.setState({dogs: dogArray}))
    .catch(errors => (console.log(errors)))
  }

  createDog = (newDog) => {
    fetch("http://localhost:3000/dogs", {
      body: JSON.stringify(newDog),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readDog())
    .catch(errors => (console.log(errors)))
  }
   

 

  render() {
    
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/dogindex"
            render={(props) => <DogIndex dogs={this.state.dogs} />} />
          <Route
            path="/dogshow/:id"
            render={(props) => {
              let id = props.match.params.id
              let dog = this.state.dogs.find(d => d.id === +id)
              return <DogShow dog={dog} deleteDog={this.deleteDog}/>
            }}
          />
          <Route
            path="/dognew"
            render={(props) => <DogNew
            createDog={this.createDog}/>}
            />
          <Route path="/dogedit:id"
            render={(props) => {
              let id = props.match.params.id
              let dog = this.state.dogs.find(d => d.id === +id)
              return <DogEdit dog={dog} updateDog={this.updateDog } id={id} />
            }}
          />
          <Route component={NotFound} />
          </Switch>
        <Footer />
       </Router>
    )
  }
}
export default App
