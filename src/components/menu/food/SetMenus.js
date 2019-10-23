import React, {Component} from 'react';
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
import {Document, Page} from "react-pdf";
import setMenu from "../../../data/set_menu.pdf";
import Hidden from "@material-ui/core/Hidden";

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 500,
//   },
// });

class SetMenus extends Component {
  // const classes = useStyles()
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({numPages}) => {
    this.setState({numPages});
  }

  changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
  }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  seeMenu =() => {
    window.open(setMenu)
  }


  render() {
    const {pageNumber, numPages} = this.state;

    return (
      <Grid>
        <Grid container spacing={3}>

          {/*hide menu in small view*/}
          <Hidden xsDown>
            <Grid item xs={12} container justify="center">
              <Grid item>
                <Document
                  file={setMenu}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber}/>
                </Document>
              </Grid>

              <Grid item container direction="row"
                    justify="space-around"
                    alignItems="center">
                <Grid item>
                  <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={this.previousPage}
                  >
                    Previous
                  </button>
                </Grid>
                <Grid item>
                  <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                  </p>
                </Grid>
                <Grid item>
                  <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={this.nextPage}
                  >
                    Next
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>

          {/*show bottom to show menu*/}
          <Hidden smUp>
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
            <Grid item xs={12} container justify="center">

              <button
                type="button"
                onClick={this.seeMenu}
              >
                See more...
              </button>
            </Grid>
          </Hidden>

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
      </Grid>

    )
  }
}

export default SetMenus
