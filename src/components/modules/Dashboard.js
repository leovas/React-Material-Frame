
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import enviroment from '../../env';

const styles = {
    
};

const Dashboard = (props) => {
    const matches = useMediaQuery('(min-width: 0px) and (max-width: 1100px)');
    const { classes } = props; 

    return (
        <div>
            
        </div>
      );
}
 
export default withStyles(styles)(Dashboard);