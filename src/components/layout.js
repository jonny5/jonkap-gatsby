import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Header from "../components/header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div>
        <Header siteTitle={title} />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto` ,
            // maxWidth: rhythm(24),
            padding: `${rhythm(2 / 8)} ${rhythm(2 / 4)}`,
          }}
        >
          <main>{children}</main>
          <footer></footer>
        </div>
      </div>
    )
  }
}

export default Layout
