import React from 'react'
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';



const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4),
    },
    listIcon:{
        color: "#fff"
    }
  }));


function NavLinks({menu, nested}) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    let menuItem;
    if (menu.child_routes) {
        menuItem = <div>
                        <ListItem button onClick={handleClick}>
                        <ListItemIcon className = {classes.listIcon} >
                            <Icon className = {menu.menu_icon} />
                        </ListItemIcon>
                        <ListItemText primary= {menu.menu_title} />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            {menu.child_routes.map((item, index) => (
                                <NavLinks key = {index} menu = {item} nested />
                            ))}
                            </List>
                        </Collapse>
                    </div> 
    } else {
        menuItem = <ListItem button component={Link} to={menu.path} className = { nested && classes.nested }  >
                    <ListItemIcon className = {classes.listIcon} >
                        <Icon className = {menu.menu_icon} />
                    </ListItemIcon>
                    <ListItemText primary={menu.menu_title}  />
                </ListItem>
    }

    return (
        <div>
            {menuItem}
        </div>
    )
}

export default NavLinks



