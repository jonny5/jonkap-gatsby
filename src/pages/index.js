import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../images/j5.gif"

import {
  Balloon,
} from "nes-react";

const IndexPage = () => (
  <Layout>
    <SEO title="Jon Kaplan" keywords={[`jon`, `kaplan`, `meditation`]} />
    <div>
      <Balloon  style={{marginLeft: "200px", marginBottom: "-10px"}}  fromLeft>
        Gone until August 13th
      </Balloon>
      <div style={{ maxWidth: `300px`, }}>
        <img src={RobotImage} />
      </div>
    </div>
  </Layout>
)

export default IndexPage
