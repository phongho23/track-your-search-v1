import React, { Component } from 'react'
import AppForm from '../AppForm/AppForm'
import ApiContext from '../ApiContext'
import config from '../config'
import './AddWeek.css'

export default class AddWeek extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const week = {
      name: e.target['week-name'].value
    }
    fetch(`${config.API_ENDPOINT}/weeks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(week),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(week => {
        this.context.addWeek(week)
        this.props.history.push(`/home/week/${week.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <section className='AddWeek'>
        <h2>Add a Week</h2>
        <AppForm onSubmit={this.handleSubmit}> 
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
