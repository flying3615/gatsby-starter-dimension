import React from 'react'
import Starter from "./food/Starter";
import SetMenus from "./food/SetMenus";
import MainDish from "./food/MainDish";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {withStyles, useTheme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import allMenu from "../../data/all_menu.pdf";

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 30,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{children: <div/>}}/>);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    minWidth: 50,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const seeMenu = () => {
  window.open(allMenu)
}

export default function Menu(props) {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <article
      id="intro"
      className={`${props.article === 'menu' ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
        }`}
      style={{display: 'none'}}
    >
      <h2 className="major">Menu</h2>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <StyledTab label="ENTREE & SOUP" {...a11yProps(0)} />
        <StyledTab label="MAIN" {...a11yProps(1)} />
        <StyledTab label="SET MENU" {...a11yProps(2)} />
      </StyledTabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Starter/>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <MainDish/>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <SetMenus/>
        </TabPanel>

      </SwipeableViews>

      <a href="#" onClick={seeMenu} style={{float:'right'}}>
        See the All Menu...
      </a>
    </article>

  )


}