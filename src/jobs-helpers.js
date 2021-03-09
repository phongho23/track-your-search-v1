
export const findWeek = (weeks=[], weekId) =>
weeks.find(week => week.id === weekId)

export const findJob = (jobs =[], jobId) =>
jobs.find(job => job.id === parseInt(jobId))

export const getJobsForWeek = (jobs=[], weekId) => (
  (!weekId)
    ? jobs
    : jobs.filter(job => job.weekId === parseInt(weekId))
)

export const countJobsForWeek = (jobs=[], weekId) =>
jobs.filter(job => job.weekId === weekId).length
