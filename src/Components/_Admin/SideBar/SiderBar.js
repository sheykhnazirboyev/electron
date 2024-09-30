import React from 'react'
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import AppConfig from '../../../constants';
import useStyles, { StyledBadge } from "./styles";
import { Typography } from '@material-ui/core';

import menus from './menus';
import NavLinks from './NavLinks';

function SiderBar({ open, handleDrawerClose }) {


  const classes = useStyles();

  return (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className = {classes.sidebarBackgroundStyles}>
          <div className = {classes.logo}>
            <img src = {AppConfig.logo1} alt = {AppConfig.logo} />
            <img src = {AppConfig.logo} alt = {AppConfig.logo1} />
          </div>
          <div className={classes.toolbar}>
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src= {AppConfig.avatar} />
            </StyledBadge>
            <Typography variant="subtitle1" className = {classes.avatar}>
              John Doe
          </Typography>
          </div>
          <List className = { classes.list }>
            {
              menus.map((menu, i ) => <NavLinks menu = {menu} /> )
            }
          </List>
          <Divider />
          <List className = { classes.list }>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className = {classes.listIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>

      </Drawer>
    </div>
  )
}

export default SiderBar
