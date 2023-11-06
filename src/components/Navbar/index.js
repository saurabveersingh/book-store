import useToastMessage from "../../utils/useToastMessage"

const Navbar = () => {
  const toastMessage = useToastMessage()
  return (
    <div
      onClick={() => {
        toastMessage.error("Not Implemented")
      }}
    >
      Login
    </div>
  )
}

export default Navbar
