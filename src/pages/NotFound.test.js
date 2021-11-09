import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('When not found displays...', () => {
    it('displays one NavLink', () => {
        const notFound = shallow(<NotFound/>)
        const notFoundHeader = notFound.find("h1")

        expect(notFoundHeader.text()).toEqual("Sorry no dogs here!")
    })
})
