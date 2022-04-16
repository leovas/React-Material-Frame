import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import HeaderMenu from './HeaderMenu';
import { useMediaQuery } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
   aboveDrawer: {
      zIndex: theme.zIndex.drawer + 1
   }
} );


const HeaderTheme = ({classes}) => {
    const smallBreakPoint = useMediaQuery('(min-width: 0px) and (max-width: 1100px)');
    return ( 
        <React.Fragment>
         <AppBar position="fixed" className={classes.aboveDrawer} >
            <HeaderMenu smallBreakPoint={smallBreakPoint} />
         </AppBar>
        </React.Fragment>
     );
}
 
export default withStyles(styles)(HeaderTheme);