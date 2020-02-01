import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../images/j5.gif"
import * as moment from 'moment'
import {Helmet} from "react-helmet";

import {
  Balloon,
} from "nes-react"


class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Jon Kaplan" keywords={[`jon`, `kaplan`, `meditation`]} />
        <Helmet link={[{rel: 'stylesheet', href: 'https://unpkg.com/nes.css@latest/css/nes.min.css'}]} />
        <div>
          <Balloon  style={{marginLeft: "200px", marginBottom: "-10px"}}  fromLeft>
            { dateText() }
          </Balloon>
          <div style={{ maxWidth: `300px`, }}>
            <img alt="jonny5" src={RobotImage} />
          </div>
        </div>
      </Layout>
    )
  }
}
const dateText = () => {
  const now = moment();
  const busyDateRanges = [
    [moment("2020-1-30"), moment("2020-03-02")]
  ];
  let text = "I am generally available";

  for (let dateRange of busyDateRanges) {
    if(now < dateRange[0]){
      text = "I'm around until " + dateRange[0].format("MMMM Do");
    } else if (now > dateRange[0] && now < dateRange[1])  {
      const dateDiff = dateRange[1].diff(dateRange[0], 'days');
      if(dateDiff < 35) {
        text = "I'm away until " + dateRange[1].format("MMMM Do");
      } else {
        text = "I'm away indefinitely. I will update this when I am back at my computer";
      }
    }
  }
  return text;
}

export default BlogIndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
