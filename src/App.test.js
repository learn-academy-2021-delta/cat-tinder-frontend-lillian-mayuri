import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
import Home from './pages/Home'
import DogIndex from './pages/DogIndex'
import dogs from './mockDogs.js'

Enzyme.configure({ adapter: new Adapter() })

describe('When the app renders', () => {
  it('displays a header and footer', () => {

    const renderedApp = shallow(<App/>)
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")

    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })

  it('provides a route "/" to the home component', () => {

    const renderedApp = shallow(<App/>)
    const renderedHomeRoute = renderedApp.find('[path="/"]')

    expect(renderedHomeRoute.props().component).toEqual(Home)
  })

  it('provides a route "/dogindex" to the DogIndex component', () => {
    const renderedApp = shallow(<App/>)
    const dogIndex = renderedApp.find('[path="/dogindex"]')
    expect(dogIndex.props().render()).toEqual(<DogIndex dogs={dogs} />)
  })
})
