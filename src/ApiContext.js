import React from 'react'

export default React.createContext({
  jobs: [],
  weeks: [],
  addWeek: () => {},
  addJob: () => {},
  deleteJob: () => {},
})
