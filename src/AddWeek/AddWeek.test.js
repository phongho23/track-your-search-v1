import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddWeek from './AddWeek'

describe(`AddWeek component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<AddWeek />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
