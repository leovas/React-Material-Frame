import React, { useEffect ,useState } from 'react';
import HeaderDrawer from './HeaderDrawer';
import HeaderTopNav from './HeaderTopNav';
import MenuIcon from '@material-ui/icons/Menu';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import { withStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { Typography, Toolbar, Box, IconButton } from '@material-ui/core';
import { grey, indigo, orange } from '@material-ui/core/colors';
import enviroment from '../../env';
import Menu from './Menu';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton:{
        color: indigo[50],
        position: "absolute",
        right: 0,
        marginRight: 20
    },
    subTitle:{
        color: grey[400],
        fontSize: 11,
    },
    subTitleSM: {
        marginLeft: 35
    },
    moduleName:{
        margin: "auto",
        color: orange[200]
    }
 });
 
function HeaderMenu({classes, smallBreakPoint}){

    const [drawer, setDrawer] = useState(false);
    const [selected, setSelected] = useState(0);
    const [moduleName, setModuleName] = useState("Dashboard");
    const location = useLocation();
    
    const toggleDrawer = () => {
        setDrawer(!drawer);
      };
   const selectItem = (event, value) =>{
        setSelected(value);
        setDrawer(false);
    };
    const changeNomduleName = (name) => {
        setModuleName(name);
    };
    const setSelectedByPath = () => {
        let pathItem = Menu.find((item) => (item.path === location.pathname));
        if(pathItem){
            setModuleName(pathItem.label);
            setSelected(pathItem.value);
        } else{
            setSelected(-1);
            setModuleName("404 - Not Found")
        }
    };

    useEffect(() => {
        setSelectedByPath();
    });

    return (
              <Toolbar>
               <div style={{width: '100%',}}>
                <Box display="flex" p={1}>
                    <Box p={1} flexGrow={0.1}>
                        <Typography variant="h4">
                            {!smallBreakPoint ? <SignalCellularAltIcon/> : null} {enviroment.mainTitle}
                        </Typography>
                        <Typography className={clsx(classes.subTitle, {[classes.subTitleSM]: !smallBreakPoint})} 
                        variant="body1">
                            Gestor de informacion de la Red Movil
                        </Typography>
                    </Box>
                    { !smallBreakPoint ? (
                       <Box p={1} flexGrow={0.2} className={classes.moduleName}>
                           <Typography variant="h5">
                               {moduleName}
                            </Typography>
                        </Box>
                        ): (null)}
                    <Box p={1} flexGrow={0.7}>
                        {smallBreakPoint? (
                           <div>
                            <IconButton className={classes.menuButton}  onClick={toggleDrawer} >
                               <MenuIcon />
                            </IconButton>
                            <nav/>
                           </div> 
                        ):(
                         <HeaderTopNav selected={selected} selectItem={selectItem} onTabClick={changeNomduleName}/>
                        )}
                    </Box>
                    <Box p={1}>
                        <div style={{position:'absolute', right: '0.5rem',}}>
                            <HeaderDrawer open={drawer} onClose={toggleDrawer}
                              selected={selected} selectItem={selectItem} changeTitle={changeNomduleName} />
                        </div>
                    </Box>
                </Box>
               </div>
              </Toolbar>
      );
}
 
export default withStyles(styles)(HeaderMenu);