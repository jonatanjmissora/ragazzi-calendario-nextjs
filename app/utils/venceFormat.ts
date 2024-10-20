export default function VenceFormat(date: string) {
    const [year, month, day] = date.split("-")
    return `${day} - ${month}`
}