

import React from 'react'
import Jobitem from '../Jobitem/Jobitem'
import './JobPageMain.css'

export default function JobPageMain(props) {
  return (
    <section className='JobPageMain'>
      <Jobitem
        id={props.job.id}
        name={props.job.name}
        modified={props.job.modified}
      />
      <div className='jobInfo'>
      <div className='JobPageMain__jobTitle'>
        <b><p>Job Title:</p></b>
        {props.job.jobTitle}
      </div>

      <div className='JobPageMain__companyName'>
        <b><p>Company Name:</p></b>
        {props.job.companyName}
      </div>

      <div className='JobPageMain__postedUrl'>
        <b><p>Job Listing URL/Info:</p></b>
        {props.job.postedUrl}
      </div>

      <div className='JobPageMain__interview'>
        <b><p>Interview Details:</p></b>
        {props.job.interview}
      </div>

      <div className='JobPageMain__jobRating'>
        <b><p>Opportunity Rating:</p></b>
        {props.job.jobRating}
      </div>

      <div className='JobPageMain__content'>
        <b><p>Job Description:</p></b>
        {props.job.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
      </div>
    </section>
  )
}

JobPageMain.defaultProps = {
  job: {
    content: '',
  }
}