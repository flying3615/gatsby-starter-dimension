import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Typography from "@material-ui/core/Typography";

const Beef = ({data}) => (
  <div>
    <ul>
      {
        data && data.allBeefCsv.edges
          .map(e => (
            <li key={e.node.id}>
              <Typography variant="p" gutterBottom>
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
        allBeefCsv {
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
    render={data => <Beef data={data} {...props} />}
  />
)