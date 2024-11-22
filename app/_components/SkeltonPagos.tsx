
export default function SkeltonPagos() {

  const array = new Array(6).fill(null)

  return (
    <div className="px-4 py-6">
      {array.map((_, i) =>

        <div
          key={i}
          className="w-full h-7 my-2 bg-my-gray animate-pulse rounded-md"
        >

        </div>

      )}
    </div>
  )
}
