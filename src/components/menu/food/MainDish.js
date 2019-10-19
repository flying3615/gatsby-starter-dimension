import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import dish1 from '../../../images/bg_pprich3.jpg'
import dish2 from '../../../images/bg_pprich2.jpg'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 500,
//   },
// });

export default function MainDish() {
  // const classes = useStyles()
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              image={dish1}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardMedia
              component="img"
              image={dish2}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
                Lizard
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

  )
}
