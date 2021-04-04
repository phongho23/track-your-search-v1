import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import JobPageMain from './JobPageMain'

describe(`JobPageMain component`, () => {
  it('renders a .JobPageMain by default', () => {
    const wrapper = shallow(<JobPageMain />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it.skip('renders a Job with job prop', () => {
    const props = {
      match: {
        params: {
          jobId: 1
        }
      }
    }
    const context = {
      jobs: [{
        id: `1`,
        name: `Software Engineer I`, 
        modified: `2021-01-03T00:00:00.000Z`, 
        weekId: `1`, 
        jobtitle: `Software Engineer III`,
        companyname: "Target",
        postedurl: `http://www.URLholder.com/`,
        interview: `Scheduled for 05/20/2021`,
        jobrating: `5`,
        content: "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi."
      }]
    }
    const job = shallow(<JobPageMain {...props} />, context)
      .find('Job')
    expect(toJson(job)).toMatchSnapshot()
  })

  // enzyme doesn't yet support React.createContext
  it.skip(`splits the content by \\n or \\n\\r, with a p foreach`, () => {
    const props = {
      match: {
        params: {
          jobId: '1'
        }
      }
    }

    const jobsContextWithDifferentContent = [
      {
        jobs: [
          {
            id: `1`,
            content: "Content with n r.\n \rafter n r.",
          }
        ]
      },
      {
        jobs: [
          {
            id: `1`,
            content: "Content with n.\nafter."
          }
        ]
      }
    ]

    jobsContextWithDifferentContent.forEach(context => {
      const content = shallow(<JobPageMain {...props} />, context)
        .find('JobPageMain__content')
      expect(toJson(content)).toMatchSnapshot()
    })
  })
})
