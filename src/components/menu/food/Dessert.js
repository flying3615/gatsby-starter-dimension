import React, {Component} from 'react';

import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import {graphql, useStaticQuery} from "gatsby";

export default function Dessert(props) {

  const data = useStaticQuery(
    graphql`
        query{
          allDessertsCsv {
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
            <ul>
              {
                data && data.allDessertsCsv.edges
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
