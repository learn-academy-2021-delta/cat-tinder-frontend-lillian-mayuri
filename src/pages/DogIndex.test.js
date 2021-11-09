import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DogIndex from './DogIndex'


Enzyme.configure({ adapter: new Adapter() })

describe("When DogIndex renders", () => {
  it("displays a heading", () => {
    const dogIndex = shallow(<DogIndex dogs={dogs} />)
    const indexHeading = dogIndex.find("h1")
    expect(indexHeading.text()).toEqual("Meet the Dogs!")
  })
  
})