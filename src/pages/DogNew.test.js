import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DogNew from './DogNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When DogNew renders", () => {
  it("displays a heading", () => {
    const dogNew = shallow(<DogNew />)
    const newheading = dogNew.find("h1")
    expect(newheading.text()).toEqual("Add a New Dog")
  })
  it("displays a form", () => {
    const dogNew = shallow(<DogNew />)
    const formGroup = dogNew.find("FormGroup")
    expect(formGroup.length).toEqual(3)
    const label = dogNew.find("Label")
    expect(label.length).toEqual(3)
    const input = dogNew.find("Input")
    expect(input.length).toEqual(3)
  })
})