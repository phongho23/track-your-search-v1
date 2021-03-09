import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Job from '../Job/Job'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { getJobsForWeek } from '../jobs-helpers'
import './JoblistMain.css'

export default class JoblistMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const { weekId } = this.props.match.params
    const { jobs=[] } = this.context
    const jobsForWeek = getJobsForWeek(jobs, weekId)
    console.log(jobsForWeek);

  return ( 
    <section className='JoblistMain'>
      <div className='JoblistMain__button-container'>
        <CircleButton
          tag={Link}
          to='/home/add-job'
          type='button'
          className='JoblistMain__add-job-button'>
          <FontAwesomeIcon icon='plus' />
          <br />
          Job
        </CircleButton>
      </div>
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {jobsForWeek.map(job =>
          <li style={{display: "inline-block"}} key={job.id}>
            <Job
              id={job.id}
              jobtitle={job.jobtitle}
              modified={job.modified}
            />
          </li>
        )}
      </ul>
    </section>
   )
  }
}