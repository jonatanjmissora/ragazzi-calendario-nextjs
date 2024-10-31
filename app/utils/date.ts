
// yyyy-mm-dd  => mm/dd/yyy
export function inputDateToNewDateFormat(date: string) {
  let [year, month, day] = date.split("-")
  day = Number(day) < 10 ? "0" + day : day
  month = Number(month) < 10 ? "0" + month : month
  year = year
  return `${month}/${day}/${year}`
}

// mm/dd/yyy => yyyy-mm-dd
export function newDateToinputDateFormat(date: string) {
  let [day, month, year] = date.split("/")
  day = Number(day) < 10 ? "0" + day : day
  month = Number(month) < 10 ? "0" + month : month
  year = year
  return `${year}-${month}-${day}`
}

export function getActualDate() {
  const actualDate = new Date().toLocaleDateString()
  return newDateToinputDateFormat(actualDate)
}

export function getAnotherDate(date: string) {
  const formatAnotherDate = inputDateToNewDateFormat(date)
  const anotherDate = new Date(formatAnotherDate).toLocaleDateString()
  return newDateToinputDateFormat(anotherDate)
}

export function addOneMonth(date: string) {
  const formatNewDate = inputDateToNewDateFormat(date)
  const newDate = new Date(formatNewDate)
  newDate.setMonth(newDate.getMonth() + 1)
  return newDateToinputDateFormat(newDate.toLocaleDateString())
}