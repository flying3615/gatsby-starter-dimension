import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography";


const Chicken = ({ data }) => (
  <div>
    <ul>
      {
        data && data.allChickenCsv.edges
          .map(e => (
            <li key={e.node.id}>
              <Typography variant="subtitle1" gutterBottom>
                {e.node.NameZh} / {e.node.NameEn} --- ${e.node.price}
              </Typography>
            </li>)
          )
      }
    </ul>
  </div>

)
export default props => (
  <StaticQuery
    query={graphql`
      query{
        allChickenCsv {
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
    render={data => <Chicken data={data} {...props} />}
  />
)