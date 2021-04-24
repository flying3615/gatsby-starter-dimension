import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import setMenu from "../../../data/set_menu.pdf";
import SetMenu from "./main/SetMenu";
import setMenu1 from "../../../images/menu/set_menu_1.jpg";
import setMenu2 from "../../../images/menu/set_menu_2.jpg";

class SetMenus extends Component {

  seeMenu = () => {
    window.open(setMenu)
  }


  render() {
    return (
      <Grid>
        <Grid container spacing={3}>
          <Grid item>
           <img src={setMenu1} alt="" style={{width:'100%'}} onClick={()=>this.seeMenu(setMenu1)}/>
          </Grid>
          <Grid item>
            <img src={setMenu2} alt="" style={{width:'100%'}} onClick={()=>this.seeMenu(setMenu2)}/>
          </Grid>
          <Grid item xs={12}>
            <SetMenu/>
          </Grid>
        </Grid>
      </Grid>

    )
  }
}

export default SetMenus
