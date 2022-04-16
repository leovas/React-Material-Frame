import { Typography, SwipeableDrawer, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import React from 'react';
import { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import { amber, blue, grey, indigo, orange } from '@material-ui/core/colors';

const styles = {
    menuItem:{
        backgroundColor: indigo[900],
        color: indigo[50],
        "&:hover":{
            color:  indigo[900],
            backgroundColor: grey[400]
        }
    },
    menuItemSelected:{
        backgroundColor: orange[500],
        color: indigo[900]
    },
    drawerPaper: {
        position: "absolute",
        width: 240
    }
}

const HeaderDrawer = (props) => {
    const {classes, open, onClose, selected, selectItem, changeTitle} = props;

    return ( 
        <Fragment>
            <SwipeableDrawer anchor="right" open={open} onClose={onClose} onOpen={null}
             classes={{paper: classes.drawerPaper}}>
                <List>
                    <ListSubheader>
                        <Typography variant="h6" component="div" align="center" color="primary"
                         gutterBottom={true}>
                           Menu Principal
                        </Typography>
                    </ListSubheader>
                    { Menu.map(
                        (item, index) => (
                            <ListItem key={index} button component={Link} to={item.path} 
                            selected={selected === item.value} 
                            onClick={(event) => (
                                selectItem(event, item.value),
                                changeTitle(item.label)
                            )} 
                            classes={{
                                root:classes.menuItem, 
                                selected: classes.menuItemSelected
                                }}
                            >
                                <ListItemText>{item.label}</ListItemText>
                            </ListItem>
                        ))}
                </List>
            </SwipeableDrawer>
        </Fragment>
     );
}
 
export default withStyles(styles)(HeaderDrawer);