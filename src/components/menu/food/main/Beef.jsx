import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Typography from "@material-ui/core/Typography";
import boil_beef from "../../../../images/dishes/boil_beef.jpg";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CardMedia from "@material-ui/core/CardMedia";


const Beef = ({data}) => (
  <div>
    <Card style={{margin: '15px'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <ThumbUpIcon/>
          </Avatar>
        }
        title="Boiled Beef/水煮牛肉"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        image={boil_beef}
      />

    </Card>
    <ul>
      {
        data && data.allBeefCsv.edges
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