import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import springRollImg from "../../../images/spring_roll.jpeg";
import noodle2 from "../../../images/noodle2.jpeg";
import Carousel from 'react-images';

const images = [{source:noodle2}, {source: springRollImg}]

class Starter extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Carousel views={images} />
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
}

export default Starter;