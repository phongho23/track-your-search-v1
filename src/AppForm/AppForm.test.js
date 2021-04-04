import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AppForm from './AppForm'

describe(`AppForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.AppForm by default', () => {
    const wrapper = shallow(<AppForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the AppForm given props', () => {
    const wrapper = shallow(<AppForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
