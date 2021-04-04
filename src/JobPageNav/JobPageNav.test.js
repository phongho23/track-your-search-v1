import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import JobPageNav from './JobPageNav'

describe(`JobPageNav component`, () => {
  it('renders a .JobPageNav by default', () => {
    const wrapper = shallow(<JobPageNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it.skip('renders a h3 with week name when in props', () => {
    const props = {
      match: {
        params: {
          jobId: 'test-job-id'
        }
      }
    }
    const context = {
      jobs: [{ id: 'test-job-id', weekId: 'test-week-id' }],
      weeks: [{ id: 'test-week-id', name: 'Important' }]
    }

    const h3 = shallow(<JobPageNav {...props} />, context)
      .find('.JobPageNav__week-name')
    expect(toJson(h3)).toMatchSnapshot()
  })
})
