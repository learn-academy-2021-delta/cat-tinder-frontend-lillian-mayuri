import React, { Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DogIndex from './pages/DogIndex'
import DogShow from './pages/DogShow'
import DogNew from './pages/DogNew'
import DogEdit from './pages/DogEdit'
import NotFound from './pages/NotFound'
import dogs from './mockDogs.js'
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
      dogs: dogs
    }
  }
  render() {
    console.log(this.state.dogs)
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
              let dog = this.state.dogs.find(c => c.id === +id)
              return <DogShow dog={dog} />
            }}
          />
          <Route path="/dognew" component={DogNew} />
          <Route path="/dogedit" component={DogEdit}/>
          <Route component={NotFound} />
          </Switch>
        <Footer />
       </Router>
    )
  }
}
export default App;
