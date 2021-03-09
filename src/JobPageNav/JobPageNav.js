
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { findJob, findWeek } from '../jobs-helpers'
import './JobPageNav.css'


export default class JobPageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  render() {

    const { jobs, weeks, } = this.context
    const { jobId } = this.props.match.params
    const job = findJob(jobs, jobId) || {}
    const week = findWeek(weeks, job.weekId)

  return (
    <div className='JobPageNav'>
      <div className='JobPageNav__back-button-wrapper'>
      <CircleButton
          tag='button'
          role='link'
          type='button'
          onClick={() => this.props.history.goBack()}
          className='JobPageNav__back-button'
      >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
      </CircleButton>
      </div>
      {week && (
        <h3 className='JobPageNav__week-name'>
          {week.name}
        </h3>
      )}
    </div>
    )
  }
}


