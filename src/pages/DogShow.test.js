import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DogShow from './DogShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When DogShow renders", () => {
  it("displays a heading", () => {
    const dogShow = shallow(<DogShow />)
    const showHeading = dogShow.find("h3")
    expect(showHeading.text()).toEqual("Dog Details")
  })
})