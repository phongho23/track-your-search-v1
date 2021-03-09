import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { countJobsForWeek } from '../jobs-helpers'
import './JoblistNav.css'

export default class JoblistNav extends React.Component {
  static contextType = ApiContext;
  
  render() {

    const { jobs=[], weeks=[] } = this.context

  return (
    <div className='JoblistNav'>
      <div className='JoblistNav__button-wrapper'>
        <CircleButton
          tag={Link}
          to='/home/add-week'
          type='button'
          className='JoblistNav__add-week-button'>
          <FontAwesomeIcon icon='plus' />
          <br />
          Week
        </CircleButton>
      </div>
      <ul className='JoblistNav__list'>
        {weeks.map(week =>
          <li style={{display: "inline-block"}} 
          key={week.id}
          >
            <NavLink
              className='JoblistNav__week-link'
              to={`/home/week/${week.id}`}
              >
              <span className='JoblistNav__num-jobs'>
                {countJobsForWeek(jobs, week.id)}
              </span>
              {week.name}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
    )
  }
}