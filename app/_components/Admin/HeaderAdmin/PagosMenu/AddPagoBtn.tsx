export default function AddPagoBtn({ setShowModal }: { setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) {

  const handleAddPago = () => {
    setShowModal(true)
  }

  return (
    <button
      className="primary-btn my-4"
      onClick={handleAddPago}
    >
      Agregar
    </button>
  )
}
