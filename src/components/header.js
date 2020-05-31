import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/capcomlogo.png" // Tell webpack this JS file uses this image

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
        <div style={{ maxWidth: `300px`}}>
           <img src={logo} alt="Logo" style={{marginBottom: 0}} />
        </div>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
