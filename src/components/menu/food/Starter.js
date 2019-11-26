import React from 'react';
import Grid from "@material-ui/core/Grid";
import scallops from "../../../images/entree/crumbed_scallops.jpg"
import entree_combination from "../../../images/entree/entree_combination.jpg"
import fried_dumplings from "../../../images/entree/fried_dumplings.jpg"
import spring_rools from "../../../images/entree/spring_rolls.jpg"
import soup from "../../../images/entree/soup.jpg"
import Carousel from 'react-images';
import Divider from "@material-ui/core/Divider";
import Entree from "./main/Entree";
import Soup from "./main/Soup";

const images = [
  {source: soup},
  {source: scallops},
  {source: spring_rools},
  {source: fried_dumplings},
  {source: entree_combination},

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
