import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';
import Menu from './Menu';
import { withStyles } from '@material-ui/core/styles';
import { blue, indigo} from '@material-ui/core/colors';

const styles = theme => ({
    tabItem: {
        paddingTop: 5,
        paddingBottom: 0,
        minWidth: "auto",
        color: indigo[50],
        backgroundColor: blue[900]
      },
    tabActive:{
        backgroundColor: indigo[50],
        borderTopLeftRadius: 30,
        borderTopRightRadius: 5,
        color: blue[900]
    },
    tabsContainer:{
        position: "absolute",
        bottom: 0,
        right:0,
        marginRight: 20
    }
});

const HeaderTopNav = (props) => {
    const {classes, selected, selectItem, onTabClick} = props;

    return ( 
        <Fragment>
            <Tabs value={selected} indicatorColor="primary" textColor="secondary" onChange={selectItem}
            classes={{root: classes.tabsContainer}}>
                {Menu.map(
                    (item, index) => (
                        <Tab key={index} component={Link} to={item.path} value={item.value}
                         label={item.label} onClick={()=> onTabClick(item.label)}
                         classes={{
                             root: classes.tabItem,
                             selected: classes.tabActive
                         }} />
                    ))}
            </Tabs>
        </Fragment>
     );
}
 
export default withStyles(styles)(HeaderTopNav);