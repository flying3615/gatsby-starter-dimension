import React, {Component} from 'react';
import Grid from "./Starter";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import setMenu from "../../../data/set_menu.pdf"

import {Document, Page} from 'react-pdf';
import dish1 from "../../../images/bg_pprich3.jpg";
import dish2 from "../../../images/bg_pprich2.jpg";

class SetMenu extends Component {

  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }


  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Document
              file={setMenu}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
          </Grid>


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

export default SetMenu