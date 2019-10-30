import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Typography from "@material-ui/core/Typography";
import bbq from "../../../../images/bbq.jpg";
import duck1 from "../../../../images/duck1.jpg";
import duck2 from "../../../../images/duck2.jpg";
import Gallery from "react-photo-gallery";


export const bbqs = [
  {
    src: bbq,
    width: 1,
    height: 1
  },
  {
    src: duck1,
    width: 1,
    height: 1
  },
  {
    src: duck2,
    width: 1,
    height: 1
  },
]

const BBQ = ({data}) => (
  <div>
    <Gallery photos={bbqs} direction={"row"}/>
    <ul>
      {
        data && data.allChineseBarbecuredCsv.edges
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