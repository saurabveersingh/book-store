import React from "react"
import PropTypes from "prop-types"

import Navbar from "../Navbar"
import ToastMessage from "../ToastMessage"
import Footer from "../Footer"

// !definition of component
/**
 *
 * @description --> Layout for all pages of the website
 * @returns Layout wrapper Component
 */
// ! component

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <ToastMessage />
        {props.children}
      </main>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
