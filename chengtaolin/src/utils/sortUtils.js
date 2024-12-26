// Sort by date (MM/YYYY)
export const sortByMMYYYDate = (list, isAscending) => {
  return list.sort((a, b) => {
    const [monthA, yearA] = a.date.split('/').map(Number)
    const [monthB, yearB] = b.date.split('/').map(Number)
    const dateA = new Date(yearA, monthA - 1)
    const dateB = new Date(yearB, monthB - 1)
    return isAscending ? dateA - dateB : dateB - dateA
  })
}
