import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import springRollImg from "../../../images/spring_roll.jpeg";
import noodle2 from "../../../images/noodle2.jpeg";
import Carousel from 'react-images';
import {graphql, useStaticQuery} from "gatsby";

const images = [{source: noodle2}, {source: springRollImg}]

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
                .map(e => (<li>{e.node.NameZh} / {e.node.NameEn} --- ${e.node.price}</li>))
            }
          </ul>
        </Grid>
      </Grid>
    </div>
  )

}
