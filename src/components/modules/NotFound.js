import { Typography, withStyles } from '@material-ui/core';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { red } from '@material-ui/core/colors';
import {NavLink} from 'react-router-dom'
import React from 'react';

const styles = {
    container:{
        display: "block",
        position: "relative",
        width: "100vw",
        height: "100vh",
    },
    notfoundBox:{
        border:`1px solid ${red[900]}`,
        borderRadius: 5,
        color: red[900],
        width: "50%",
        top: "50%",
        left: "50%",
        display: "block",
        backgroundColor: red[100],
        position: "absolute",
        padding: "10px 20px",
        transform: "translate(-50%, -120%)"
    }
};

const NotFound = ({classes}) => {
    return ( 
        <div className={classes.container}>
            <Typography component="div" className={classes.notfoundBox}>
                <Typography variant="h4">
                    <MoodBadIcon /> 404 - No se encuentra el recurso que solicita.
                </Typography>
                <Typography variant="button" component={NavLink} to="/">
                    Dashboard
                </Typography>
            </Typography>
        </div>
     );
}
 
export default withStyles(styles)(NotFound);