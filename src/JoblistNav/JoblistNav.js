import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import { countJoboppsForWeek } from '../jobopps-helpers'
import './JoblistNav.css'

export default function JoblistNav(props) {
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
        {props.jobweeks.map(week =>
          <li style={{display: "inline-block"}} key={week.id}>
            <NavLink
              className='JoblistNav__week-link'
              to={`/home/week/${week.id}`}>
              <span className='JoblistNav__num-jobopps'>
                {countJoboppsForWeek(props.jobopps, week.id)}
              </span>
              {week.name}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}

JoblistNav.defaultProps = {
  jobweeks: []
}