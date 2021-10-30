import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", () => {
    it("displays a heading", () => {
      const homeWrapper = shallow(<Home />)
      const showHeading = homeWrapper.find("h1")

      expect(showHeading.text()).toEqual("Welcome to Dog Tinder!")
    })
  })
