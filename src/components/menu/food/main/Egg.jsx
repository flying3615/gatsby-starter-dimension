import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography";

const Egg = ({ data }) => (
  <ul>
    {
      data && data.allEggCsv.edges
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
        allEggCsv {
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
    render={data => <Egg data={data} {...props} />}
  />
)