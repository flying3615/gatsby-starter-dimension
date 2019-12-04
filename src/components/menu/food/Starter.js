import React from 'react';
import Grid from "@material-ui/core/Grid";
import snack from "../../../images/entree/snack.jpg"
import soup from "../../../images/entree/soup.jpg"
import Carousel from 'react-images';
import Divider from "@material-ui/core/Divider";
import Entree from "./main/Entree";
import Soup from "./main/Soup";

const images = [
  {source: soup},
  {source: snack},
]

export default function Starter() {

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Carousel views={images}/>
        </Grid>
        <Grid>

          <h3 className="major">Entree/前菜</h3>
          <Entree/>
          <Divider variant="middle"/>

          <h3 className="major">Soup/汤类</h3>
          <Soup/>
          <Divider variant="middle"/>

        </Grid>
      </Grid>
    </div>
  )

}
