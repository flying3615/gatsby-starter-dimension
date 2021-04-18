import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Typography from "@material-ui/core/Typography";




const BBQ = ({data}) => (
  <div>
    <ul>
      {
        data && data.allChineseBarbecuredCsv.edges
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
        allChineseBarbecuredCsv {
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
    render={data => <BBQ data={data} {...props} />}
  />
)