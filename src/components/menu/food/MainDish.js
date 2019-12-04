import React, {useState} from 'react';

import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import {graphql, useStaticQuery} from "gatsby";
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
import allMenu from "../../../data/all_menu.pdf";

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

const seeMenu =() => {
  window.open(allMenu)
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

        <Grid item xs={12}>
          <button
            type="button"
            onClick={seeMenu}
          >
            See Menu...
          </button>
        </Grid>

        <Grid item xs={12}>

          <h3 className="major">Chinese BBQ/烧味</h3>
          <BBQ/>
          <Divider variant="middle"/>

          <h3 className="major">Sizzling Plate/铁板烧</h3>
          <Plate/>
          <Divider variant="middle"/>

          <h3 className="major">Chicken/鸡肉</h3>
          <Chicken/>
          <Divider variant="middle"/>


          <h3 className="major">Beef/牛肉</h3>
          <Beef/>
          <Divider variant="middle"/>

          <h3 className="major">Seafood/海鲜</h3>
          <Seafood/>
          <Divider variant="middle"/>

          <h3 className="major">Pork/猪肉</h3>
          <Pork/>
          <Divider variant="middle"/>


          <h3 className="major">Tofu/豆腐</h3>
          <Tofu/>
          <Divider variant="middle"/>

          <h3 className="major">Vegetarian/素菜</h3>
          <Veg/>
          <Divider variant="middle"/>


          <h3 className="major">Egg Foo Young/芙蓉蛋类</h3>
          <Egg/>
          <Divider variant="middle"/>


          <h3 className="major">Fried Rice/炒饭</h3>
          <Rice/>
          <Divider variant="middle"/>

          <h3 className="major">Chow Mein(Noodles)/炒面</h3>
          <Noodle/>
          <Divider variant="middle"/>

        </Grid>

      </Grid>
    </div>

  );


}
