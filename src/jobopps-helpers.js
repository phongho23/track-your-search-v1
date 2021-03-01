
export const findWeek = (jobweeks=[], weekId) =>
jobweeks.find(week => week.id === weekId)

export const findJobitem = (jobopps=[], jobId) =>
jobopps.find(jobopps => jobopps.id === jobId)

export const getJoboppsForWeek = (jobopps=[], weekId) => (
  (!weekId)
    ? jobopps
    : jobopps.filter(jobopps => jobopps.weekId === weekId)
)

export const countJoboppsForWeek = (jobopps=[], weekId) =>
jobopps.filter(jobopps => jobopps.weekId === weekId).length
