export default function AddPagoBtn({ setShowModal }) {

  const handleAddPago = () => {
    alert("SSSSSSSIIIIII")
    setShowModal(prev => !prev)
  }

  return (
    <button
      className="bg-my-black p-1 px-4 rounded border border-my-black duration-200 hover:bg-gray-500"
      onClick={handleAddPago}
    >
      Agregar
    </button>
  )
}
