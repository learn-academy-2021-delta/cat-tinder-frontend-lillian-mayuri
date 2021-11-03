import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DogShow from './DogShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When DogShow renders", () => {
  const dog = {
    id: 3,
    name: "Toast",
    age: 1,
    enjoys: "getting all the attention"
  }
  it("displays a card", () => {
    const dogShow = shallow(<DogShow dog={dog}/>)
    const card = dogShow.find("Card")
    expect(card.length).toEqual(1)
    const cardTitle = dogShow.find("CardTitle")
    expect(cardTitle.length).toEqual(1)
    const cardText = dogShow.find("CardText")
    expect(cardText.length).toEqual(2)
  })
})