import React from 'react';
import Grid from "@material-ui/core/Grid";
import snack from "../../../images/entree/snack.jpg"
import soup from "../../../images/entree/soup.jpg"
import Carousel from 'react-images';
import Divider from "@material-ui/core/Divider";
import Entree from "./main/Entree";
import Soup from "./main/Soup";
import entreeSoup from "../../../images/menu/entree_soup.jpg";

const seeMenu =(e) => {
  window.open(e)
}

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

        <Grid item xs={12}>
          <img src={entreeSoup} alt="" style={{width:'100%'}} onClick={()=>seeMenu(entreeSoup)}/>
        </Grid>

        <Grid container xs={12}>
          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Entree/前菜</h3>
            <Entree/>
            <Divider variant="middle"/>
          </Grid>

          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Soup/汤类</h3>
            <Soup/>
            <Divider variant="middle"/>
          </Grid>

        </Grid>
      </Grid>
    </div>
  )

}
