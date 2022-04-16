import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HeaderTheme from './components/header/HeaderTheme';
import Modules from './components/modules/Modules';
import NotFound from './components/modules/NotFound';

const styles = theme => ({
    content: {
        marginTop: 90,
        padding: 10,
        display: "block",
        top: theme.mixins.toolbar + 30
    },
});

const history = createBrowserHistory();

function AppRoutes({classes}){
   return (
      <BrowserRouter history={history}>
        <HeaderTheme/>
        <Box className={classes.content}>
         <Switch>
           {Modules.map(
             (item, index) => (
             <Route key={index} exact path={item.path} component={item.component} />
             ))}
            <Route path="*" component={NotFound}/>
         </Switch> 
        </Box>
      </BrowserRouter>
   );
}

export default withStyles(styles)(AppRoutes);