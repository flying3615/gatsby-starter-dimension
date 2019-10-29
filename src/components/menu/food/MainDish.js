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
import Soup from "./main/Soup";
import allMenu from "../../../data/all_menu.pdf";
import boil_beef from "../../../images/dishes/boil_beef.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const seeMenu =() => {
  window.open(allMenu)
}

export default function MainDish() {


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>


          <h3 className="major">Beef/牛肉</h3>
          <Card style={{margin:'15px'}}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  <ThumbUpIcon />
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
          <Beef/>
          <Divider variant="middle"/>

          <h3 className="major">Chicken/鸡肉</h3>
          <Chicken/>
          <Divider variant="middle"/>

          <h3 className="major">Chinese BBQ/烧味</h3>
          <BBQ/>
          <Divider variant="middle"/>

          <h3 className="major">Egg Foo Young/芙蓉蛋类</h3>
          <Egg/>
          <Divider variant="middle"/>

          <h3 className="major">Chow Mein(Noodles)/炒面</h3>
          <Noodle/>
          <Divider variant="middle"/>

          <h3 className="major">Sizzling Plate/铁板烧</h3>
          <Plate/>
          <Divider variant="middle"/>

          <h3 className="major">Pork/猪肉</h3>
          <Pork/>
          <Divider variant="middle"/>

          <h3 className="major">Fried Rice/炒饭</h3>
          <Rice/>
          <Divider variant="middle"/>

          <h3 className="major">Seafood/海鲜</h3>
          <Seafood/>
          <Divider variant="middle"/>

          <h3 className="major">Tofu/豆腐</h3>
          <Tofu/>
          <Divider variant="middle"/>

          <h3 className="major">Vegetarian/素菜</h3>
          <Veg/>
          <Divider variant="middle"/>

          <h3 className="major">Soup/汤类</h3>
          <Soup/>
          <Divider variant="middle"/>

        </Grid>
        <Grid item xs={12}>
          <button
            type="button"
            onClick={seeMenu}
          >
            See more...
          </button>
        </Grid>
      </Grid>
    </div>

  );


}
