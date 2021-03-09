import React from 'react'
import Job from '../Job/Job'
import ApiContext from '../ApiContext'
import { findJob } from '../jobs-helpers'
import './JobPageMain.css'

export default class JobPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext

  handleDeleteJob = jobId => {
    this.props.history.push(`/`)
  }

  render() {

    const { jobs=[] } = this.context
    const { jobId } = this.props.match.params
    const job = findJob(jobs, jobId) || { content: '' }

  return (
    <section className='JobPageMain'>
      <Job
        id={job.id}
        jobtitle={job.jobtitle}
        modified={job.modified}
        onDeleteJob={this.handleDeleteJob}
      />
      <div className='jobInfo'>
      <div className='JobPageMain__jobtitle'>
        <b><p>Job Title:</p></b>
        {job.jobtitle}
      </div>

      <div className='JobPageMain__companyname'>
        <b><p>Company Name:</p></b>
        {job.companyname}
      </div>

      <div className='JobPageMain__postedurl'>
        <b><p>Job Listing URL/Info:</p></b>
        {job.postedurl}
      </div>

      <div className='JobPageMain__interview'>
        <b><p>Interview Details:</p></b>
        {job.interview}
      </div>

      <div className='JobPageMain__jobrating'>
        <b><p>Opportunity Rating:</p></b>
        {job.jobrating}
      </div>

      <div className='JobPageMain__content'>
        <b><p>Job Description:</p></b>
        {job.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
      </div>
    </section>
    )
  }
}
