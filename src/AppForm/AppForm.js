import React from 'react'
import './AppForm.css'

export default function AppForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['AppForm-Form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}
