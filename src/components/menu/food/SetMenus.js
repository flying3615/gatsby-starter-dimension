import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {Document, Page} from "react-pdf";
import setMenu from "../../../data/set_menu.pdf";
import Hidden from "@material-ui/core/Hidden";
import SetMenu from "./main/SetMenu";

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

  seeMenu = () => {
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
            <Grid item xs={12} container justify="center">
              <button
                type="button"
                onClick={this.seeMenu}
              >
                See Menu...
              </button>
            </Grid>
          </Hidden>

          <Grid item xs={12}>
            <SetMenu/>
          </Grid>
        </Grid>
      </Grid>

    )
  }
}

export default SetMenus
