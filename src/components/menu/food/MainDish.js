import React from 'react';


import Grid from "@material-ui/core/Grid";
import Beef from "./main/Beef";
import Divider from "@material-ui/core/Divider";
import Chicken from "./main/Chicken";
import BBQ from "./main/BBQ";
import Egg from "./main/Egg";
import Noodle from "./main/Noodle";
import Plate from "./main/Plate";
import Pork from "./main/Pork";
import Rice from "./main/Rice";
import Seafood from "./main/Seafood";
import Tofu from "./main/Tofu";
import Veg from "./main/Veg";

import duck from "../../../images/dishes/duck.jpg";
import orange_beef from "../../../images/dishes/orange_beef.jpg";
import rice from "../../../images/dishes/fried_rice.jpg";
import fried_pork from "../../../images/dishes/fried_pork.jpg";
import sizzeling from "../../../images/dishes/sizzeling.jpg";
import broccli from "../../../images/dishes/broccli.jpg";
import omlet from "../../../images/dishes/omlet.jpg";
import chicken from "../../../images/dishes/chicken.jpg";
import lemon_chicken from "../../../images/dishes/lemon_chicken.jpg";

import Carousel from "react-images";
import sizzlingChicken from "../../../images/menu/sizzling_chicken.jpg";
import porkTofu from "../../../images/menu/pork_tofu.jpg";
import seaFoodBeef from "../../../images/menu/seefood_beef.jpg";
import friedRiceNoddle from "../../../images/menu/fried_rice_noodle.jpg";

const seeMenu =(e) => {
  window.open(e)
}

const images = [
  {source: duck},
  {source: orange_beef},
  {source: rice},
  {source: sizzeling},
  {source: broccli},
  {source: omlet},
  {source: chicken},
  {source: lemon_chicken},
  {source: fried_pork},
]

export default function MainDish() {


  return (
    <div>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Carousel views={images}/>
        </Grid>

        <Grid container xs={12}>
          <Grid item xs={12} spacing={1}>
            <img src={sizzlingChicken} alt="" style={{width:'100%'}} onClick={()=>seeMenu(sizzlingChicken)}/>
          </Grid>

          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Sizzling Plate/铁板烧</h3>
            <Plate/>
            <Divider variant="middle"/>
          </Grid>

          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Chicken/鸡肉</h3>
            <Chicken/>
            <Divider variant="middle"/>
          </Grid>

          <Grid item xs={12} spacing={1}>
            <img src={porkTofu} alt="" style={{width:'100%'}} onClick={()=>seeMenu(porkTofu)}/>
          </Grid>

          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Pork/猪肉</h3>
            <Pork/>
            <Divider variant="middle"/>
          </Grid>

          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Tofu/豆腐</h3>
            <Tofu/>
            <Divider variant="middle"/>
          </Grid>

          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Vegetarian/素菜</h3>
            <Veg/>
            <Divider variant="middle"/>
          </Grid>

          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Egg Foo Young/芙蓉蛋类</h3>
            <Egg/>
            <Divider variant="middle"/>
          </Grid>

          <Grid item xs={12} spacing={1}>
            <img src={seaFoodBeef} alt="" style={{width:'100%'}} onClick={()=>seeMenu(seaFoodBeef)}/>
          </Grid>

          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Beef/牛肉</h3>
            <Beef/>
            <Divider variant="middle"/>
            <h3 className="major">Chinese BBQ/烧味</h3>
            <BBQ/>
            <Divider variant="middle"/>
          </Grid>

          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Seafood/海鲜</h3>
            <Seafood/>
            <Divider variant="middle"/>
          </Grid>

          <Grid item xs={12} spacing={1}>
            <img src={friedRiceNoddle} alt="" style={{width:'100%'}} onClick={()=>seeMenu(friedRiceNoddle)}/>
          </Grid>


          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Fired Noodles/炒面</h3>
            <Noodle/>
            <Divider variant="middle"/>
          </Grid>

          <Grid item xs={12} md={6} spacing={1}>
            <h3 className="major">Fried Rice/炒饭</h3>
            <Rice/>
            <Divider variant="middle"/>
          </Grid>

        </Grid>

      </Grid>
    </div>

  );


}
