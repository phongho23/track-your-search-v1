import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import JoblistNav from './JoblistNav'

describe(`JoblistNav component`, () => {
  it('renders a .JoblistNav by default', () => {
    const wrapper = shallow(<JoblistNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't yet support React.createContext
  it.skip('renders a link in ul for each week in array', () => {
    const context = {
      jobs: [
        {
            "id": "1",
            "name": "Software Engineer I", 
            "modified": "2021-01-03T00:00:00.000Z", 
            "weekId": "1", 
            "jobtitle": "Software Engineer III",
            "companyname": "Target",
            "postedurl": "http://www.URLholder.com/",
            "interview": "Scheduled for 05/20/2021",
            "jobrating": "5",
            "content": "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi."
        },
        {
            "id": "2",
            "name": "Software Engineer II", 
            "modified": "2021-08-15T23:00:00.000Z", 
            "weekId": "2", 
            "jobtitle": "Software Engineer I",
            "companyname": "Wal-Mart",
            "postedurl": "http://www.URLholder.com/",
            "interview": "Scheduled for 06/20/2021",
            "jobrating": "5",
            "content": "Eos laudantium quia ab blanditiis temporibus necessitatibus. Culpa et voluptas ut sed commodi."
        },
        {
            "id": "3",
            "name": "Software Engineer III", 
            "modified": "2021-03-01T00:00:00.000Z", 
            "weekId": "3", 
            "jobtitle": "Software Engineer II",
            "companyname": "Home Depot",
            "postedurl": "http://www.URLholder.com/",
            "interview": "Scheduled for 07/20/2021",
            "jobrating": "5",
            "content": "Occaecati dignissimos quam qui facere deserunt quia. Quaerat aut eos laudantium dolor odio officiis illum."
        }
      ],
      weeks: [
        {
          "id": "1",
          "name": "Week 1"
        },
        {
          "id": "2",
          "name": "Week 2"
        },
        {
          "id": "3",
          "name": "Week 3"
        }
      ]
    }
    const ul = shallow(<JoblistNav />, context)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})
