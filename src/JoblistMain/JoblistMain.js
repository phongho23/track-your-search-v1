import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Jobitem from '../Jobitem/Jobitem'
import CircleButton from '../CircleButton/CircleButton'
import './JoblistMain.css'

export default function JoblistMain(props) {
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
        {props.jobopps.map(job =>
          <li style={{display: "inline-block"}} key={job.id}>
            <Jobitem
              id={job.id}
              name={job.name}
              modified={job.modified}
            />
          </li>
        )}
      </ul>
    </section>
  )
}

JoblistMain.defaultProps = {
  jobopps: [],
}
