import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import scallops from "../../../images/entree/crumbed_scallops.jpg"
import entree_combination from "../../../images/entree/entree_combination.jpg"
import fried_dumplings from "../../../images/entree/fried_dumplings.jpg"
import spring_rools from "../../../images/entree/spring_rolls.jpg"
import Carousel from 'react-images';
import {graphql, useStaticQuery} from "gatsby";

const images = [
  {source: scallops},
  {source: spring_rools},
  {source: fried_dumplings},
  {source: entree_combination},

  ]

export default function Starter(props) {

  const data = useStaticQuery(
    graphql`
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
        }`
  )
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Carousel views={images}/>
        </Grid>


        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </div>
  )

}
