import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography";

const Noodle = ({ data }) => (
  <ul>
    {
      data && data.allNoodleCsv.edges
        .map(e => (
          <li key={e.node.id}>
            <Typography variant="subtitle1" gutterBottom>
              {e.node.NameZh} / {e.node.NameEn} --- ${e.node.price}
            </Typography>
          </li>)
        )
    }
  </ul>
)
export default props => (
  <StaticQuery
    query={graphql`
      query{
        allNoodleCsv {
          edges {
            node {
              NameEn
              NameZh
              price
              id
            }
          }
        }
      }
    `}
    render={data => <Noodle data={data} {...props} />}
  />
)