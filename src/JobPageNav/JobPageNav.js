
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import './JobPageNav.css'

export default function JobPageNav(props) {
  return (
    <div className='JobPageNav'>

      <div className='JobPageNav__back-button-wrapper'>
      <CircleButton
          tag='button'
          role='link'
          type='button'
          onClick={() => props.history.goBack()}
          className='JobPageNav__back-button'>
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
      </CircleButton>
      </div>

      {props.week && (
        <h3 className='JobPageNav__week-name'>
          {props.week.name}
        </h3>
      )}
    </div>
  )
}

JobPageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}
