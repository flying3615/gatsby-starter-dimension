import React, {Component} from 'react';

import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

class Dessert extends Component {

  render() {

    return (
      <div>
        <Grid container spacing={3}>

          <Grid item xs={12}>
            <Typography>
              Main Dish Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
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

export default Dessert