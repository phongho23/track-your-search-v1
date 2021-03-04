import React, { Component } from 'react'
import AppForm from '../AppForm/AppForm'
import './AddWeek.css'

export default class AddWeek extends Component {

  render() {
    return (
      <section className='AddWeek'>
        <h2>Add a Week</h2>
        <AppForm > 
        <div className='AddWeekItems'>
          <div className='field'>
            <label htmlFor='week-name-input'>
              Which week of your job search is this?  
            </label>
            <br />
            <input type='text' id='week-name-input' name='week-name' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add Week
            </button>
          </div>
        </div>
        </AppForm>
      </section>
    )
  }
}
