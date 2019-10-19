import React, {Component} from 'react';
import Grid from "./Starter";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function Dessert() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardMedia
                component="img"
                image="https://source.unsplash.com/iecJiKe_RNg/600x799"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
                  Mushroom
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={12}>
            <Typography>
              Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
              aliquam facilisis ante interdum congue. Integer mollis, nisl amet
              convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
              magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
              By the way, check out my <a href="#work">awesome work</a>.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
}