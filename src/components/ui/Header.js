import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/core/styles"

import logo from "../network.png"
// different syntax so that we can use our theme inside of our styles
// this is so hello under header
const useStyles = makeStyles (theme => (
  // object underneath
  {
    toolbarMargin: {
      // the spread operator copies the whole object of mixins
      ...theme.mixins.toolbar
    }
  }
))

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {

  const classes = useStyles()
    return (
        <React.Fragment> 
        {/* we use fragment instead of div because bit faster and has less memory usage (no need to create an extra DOM node */}
       <ElevationScroll>
        <AppBar position="fixed" color="primary"> 
        {/* disableGutters={true} if you wanted logo to go all the way to the left of the appbar*/}
        <Toolbar> 
        {/* <Typography variant="h3" color="secondary">
        Data Visualisation</Typography> */}
        <img alt= "MyLogo" src={logo} width="50px"/>
        </Toolbar>
        </AppBar></ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
      

    )
}

export default Header

