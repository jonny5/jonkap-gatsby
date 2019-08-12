import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../images/j5.gif"
import * as moment from 'moment';

import {
  Balloon,
} from "nes-react";

const IndexPage = () => (
  <Layout>
    <SEO title="Jon Kaplan" keywords={[`jon`, `kaplan`, `meditation`]} />
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

const dateText = () => {
  const now = moment();
  const busyDateRanges = [
    [moment("2019-08-17"), moment("2019-08-28")],
    [moment("2019-09-20"), moment("2019-11-08")]
  ];
  let text = "I am generally available";

  for (let dateRange of busyDateRanges) {
    if(now < dateRange[0]){
      text = "I'm around until " + dateRange[0].format("MMMM Do");
      break
    } else if (now > dateRange[0] && now < dateRange[1])  {
      const dateDiff = dateRange[1].diff(dateRange[0], 'days');
      if(dateDiff < 14) {
        text = "I'm away until " + dateRange[1].format("MMMM Do");
      } else {
        text = "I'm away indefinitely. I will update this when I am back at my computer";
      }
      break
    }
  }
  return text;
}

export default IndexPage
