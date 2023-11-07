import { useContext } from "react"

import { MutableContext } from "../../stores/global/MutableStore/MutableStore"
import { TOAST_MESSAGE } from "../../stores/global/MutableStore/MutableActions"

// !definition of component
/**
 *
 * @description --> Used to navigate through the website
 * @returns Navbar component
 */
// ! component

const Navbar = () => {
  const [state, dispatch] = useContext(MutableContext)

  return (
    <header>
      <nav
        onClick={() => {
          dispatch({ type: TOAST_MESSAGE, payload: { type: "error", message: "Not Implemented" } })
        }}
      >
        Login
      </nav>
    </header>
  )
}

export default Navbar
