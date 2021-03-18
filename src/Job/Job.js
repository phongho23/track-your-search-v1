
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { format } from 'date-fns'
import './Job.css'
import ApiContext from '../ApiContext'
import config from '../config'

export default class Job extends React.Component {
  static defaultProps = {
    onDeleteJob: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const jobId = this.props.id

    fetch(`${config.API_ENDPOINT}/jobs/${jobId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(() => {
        this.context.deleteJob(jobId)
        this.props.onDeleteJob(jobId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

render() {
  const { jobtitle, id, modified } = this.props

  return (
    <div style={
      {width: "150px", 
        height: "150px", 
        margin: "10px", 
        position: "relative"}} 
        className='Job'
    >
      <h2 className='Job__title'>
        <Link to={`/home/job/${id}`}>
          {jobtitle}
        </Link>
      </h2>
      <button style={{color: "red", fontSize: "20px", position: "absolute", top: "0", right: "0" }} 
      type='button'
      onClick={this.handleClickDelete}
      >
        {' '}
        X
      </button>
      <div className='Job__dates'>
        <div className='Job__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
    )
  }
}