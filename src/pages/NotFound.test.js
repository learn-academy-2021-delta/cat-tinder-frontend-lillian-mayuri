import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('When not found displays...', () => {
    it('displays one NavLink', () => {
        const notFoundWrapper = shallow(<NotFound/>)
        const navLinkWrapper = notFoundWrapper.find("NavLink")

        expect(navLinkWrapper.length).toEqual(1)
    })
})
