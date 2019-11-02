import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography";
import chicken from "../../../../images/dishes/chicken.jpg";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

const Chicken = ({ data }) => (
  <div>
    <Card style={{margin: '15px'}}>
      <CardMedia
        component="img"
        image={chicken}
      />
    </Card>

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