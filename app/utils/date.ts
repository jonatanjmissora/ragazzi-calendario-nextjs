export default function getActualDate() {

  const dateArray = new Date().toLocaleDateString().split("/")

  const date = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`

  return date

}