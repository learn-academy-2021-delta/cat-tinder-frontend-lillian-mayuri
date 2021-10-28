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
      <>
        <Header />
        <Home />
        <DogIndex />
        <DogShow />
        <DogNew />
        <DogEdit />
        <NotFound />
        <Footer />
      </>
    )
  }
}
export default App;
