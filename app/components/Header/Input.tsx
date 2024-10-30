export function Input({ text, filter, setFilter }: { text: string, filter: string, setFilter: (newFilter: string) => void }) {

  const labelText = text[0].toUpperCase() + text.slice(1)

  return (
    <>
      <input
        className="hidden flex-0"
        onChange={() => setFilter(text)}
        type="radio" id={text} name="filter"
        checked={filter === text}
      />
      <label htmlFor={text}
        className="text-slate-600 text-center flex-1 border border-transparent hover:text-black px-1">{labelText}</label>
    </>
  )
}