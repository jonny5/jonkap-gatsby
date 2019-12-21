import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      // borderBottom: `1px solid black`,
      // marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 0rem`,
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
          <Logo />
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
