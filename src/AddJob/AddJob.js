import React, { Component } from 'react'
import AppForm from '../AppForm/AppForm'
import './AddJob.css'

export default class AddJob extends Component {

  render() {
    const { weeks=[] } = this.context
    return (
      <section className='AddJob'>
        <h2>Add a Job</h2>
        <AppForm >
        <div className='AddJobItems'>
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
            <select id='job-week-select' name='job-week-selected'>
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
            Job Listing URL / Method of Application
            </label>
            <br />
            <input type='text' id='job-listing-input' name='job-listing-name' />
          </div>

          <div className='field'>
            <label htmlFor='job-url-input'>
            Interview Details
            </label>
            <br />
            <textarea id='job-url-input' name='job-url-name' />
          </div>

          <div className='field'>
            <label htmlFor='job-desc-input'>
            Job Description / Relevant Notes
            </label>
            <br />
            <textarea id='job-desc-input' name='job-desc-content' />
          </div>

          <div className='field'>
            <label htmlFor='job-rating-select'>
              Opportunity Rating
            </label>
            <br />
            <select id='job-rating-select' name='job-rating-selected'>
              <option value={null}>...</option>
              {weeks.map(week =>
                <option key={week.id} value={week.id}>
                  {week.name}
                </option>
              )}
            </select>
          </div>

          <br />

          <div className='buttons'>
            <button type='submit'>
              Add Job
            </button>
          </div>
        </div>
        </AppForm>
      </section>
    )
  }
}
