import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';


function Header({ handleDrawerOpen, open, handleToggleDrawer }) {

  const classes = useStyles();

  return (
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleDrawer}
            edge="start"
            className={clsx(classes.menuButton, )}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className = {classes.title} >
            Dashboard
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}

export default Header;