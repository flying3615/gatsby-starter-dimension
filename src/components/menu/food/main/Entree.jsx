import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography";

const Entree = ({ data }) => (
  <ul>
    {
      data && data.allEntreeCsv.edges
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
        allEntreeCsv {
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
    render={data => <Entree data={data} {...props} />}
  />
)