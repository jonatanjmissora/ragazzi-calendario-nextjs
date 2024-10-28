export default function VenceFormat(date: string) {
    const [, month, day] = date.split("-")
    return `${day} - ${month}`
}