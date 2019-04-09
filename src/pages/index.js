import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../images/j5.gif"

const IndexPage = () => (
  <Layout>
    <SEO title="Jon Kaplan" keywords={[`jon`, `kaplan`, `meditation`]} />
    <h1>Welcome friend</h1>
    <div style={{ maxWidth: `300px`}}>
      <img src={RobotImage} />
    </div>
  </Layout>
)

export default IndexPage
