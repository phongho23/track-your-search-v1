
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { format } from 'date-fns'
import './Jobitem.css'

export default function Jobitem(props) {
  return (
    <div style={{width: "150px", height: "150px", margin: "10px", position: "relative"}} className='Jobitem'>
      <h2 className='Jobitem__title'>
        <Link to={`/home/Jobitem/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <button style={{color: "red", fontSize: "20px", position: "absolute", top: "0", right: "0" }} type='button'>
        {' '}
        X
      </button>
      <div className='Jobitem__dates'>
        <div className='Jobitem__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}