import Navbar from "../Navbar"

const Layout = (props) => {
  return (
    <div>
      <div className="position-fixed right-0 fs-18px alert-box-wrapper fixed-alert-box" id="fixed-error-div"></div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  )
}

export default Layout
