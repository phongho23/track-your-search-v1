import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Job from './Job'

describe(`Job component`, () => {
  const props = {
    id: '1',
    name: 'test-class-name',
    modified: '2021-01-03T00:00:00.000Z',
  }

  it('renders a .Job by default', () => {
    const wrapper = shallow(<Job />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Job given props', () => {
    const wrapper = shallow(<Job {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
