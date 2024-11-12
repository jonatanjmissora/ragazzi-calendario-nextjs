export default function AddPagoBtn({ setShowModal }: { setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {

  const handleAddPago = () => {
    setShowModal(true)
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
