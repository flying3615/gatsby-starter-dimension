import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography";

const Soup = ({ data }) => (
  <ul>
    {
      data && data.allSoupsCsv.edges
        .map(e => (
          <li key={e.node.id}>
            <Typography variant="p" gutterBottom>
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
        allSoupsCsv {
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
    render={data => <Soup data={data} {...props} />}
  />
)