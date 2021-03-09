import React, { Component } from 'react'
import AppForm from '../AppForm/AppForm'
import ApiContext from '../ApiContext'
import config from '../config'
import './AddJob.css'
import { useEffect } from 'react'

export default class AddJob extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }

  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const newJob = {
      jobtitle: e.target['job-name'].value,
      companyname: e.target['company-name'].value,
      weekId: e.target['job-week-id'].value,
      interview: e.target['job-listing-name'].value,
      postedurl: e.target['job-url-name'].value,
      content: e.target['job-content'].value,
      jobrating: e.target['job-rating-selected'].value,
      modified: new Date(),
    }
    fetch(`${config.API_ENDPOINT}/jobs`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(job => {
        this.context.addJob(job)
        this.props.history.push(`/home/week/${job.weekId}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { weeks=[] } = this.context
    return (
      <section className='AddJob'>
        <h2>Add a Job</h2>
        <AppForm onSubmit={this.handleSubmit} className='AddJobItems'>
          <div className='field'>
            <label htmlFor='job-name-input'>
              Job Title
            </label>
            <br />
            <input type='text' id='job-name-input' name='job-name' />
          </div>

          <div className='field'>
            <label htmlFor='company-name-input'>
              Company Name
            </label>
            <br />
            <input type='text' id='company-name-input' name='company-name' />
          </div>

          <div className='field'>
            <label htmlFor='job-week-select'>
              Week
            </label>
            <br />
            <select id='job-week-select' name='job-week-id'>
              <option value={null}>...</option>
              {weeks.map(week =>
                <option key={week.id} value={week.id}>
                  {week.name}
                </option>
              )}
            </select>
          </div>

          <div className='field'>
            <label htmlFor='job-listing-input'>
            Interview Details
            </label>
            <br />
            <input type='text' id='job-listing-input' name='job-listing-name' />
          </div>

          <div className='field'>
            <label htmlFor='job-url-input'>
            Job Listing URL / Method of Application
            </label>
            <br />
            <input type='text' id='job-url-input' name='job-url-name' />
          </div>

          <div className='field'>
            <label htmlFor='job-desc-input'>
            Job Description / Relevant Notes
            </label>
            <br />
            <input type='text' id='job-desc-input' name='job-content' />
          </div>

          <div className='field'>
            <label htmlFor='job-rating-select'>
              Opportunity Rating
            </label>
            <br />
            <select type='integer' id='job-rating-select' name='job-rating-selected'>
              <option value={null}>...</option>
                <option value={1}>
                  {1}
                </option>

                <option value={2}>
                  {2}
                </option>

                <option value={3}>
                  {3}
                </option>

                <option value={4}>
                  {4}
                </option>

                <option value={5}>
                  {5}
                </option>
            </select>
          </div>

          <br />

          <div className='buttons'>
            <button type='submit'>
              Add Job
            </button>
          </div>
        </AppForm>
      </section>
    )
  }
}
