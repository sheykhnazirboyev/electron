import { makeStyles, withStyles } from "@material-ui/core";
import Badge from '@material-ui/core/Badge';
import AppConfig from '../../../constants';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  paper: {
    background: 'black',
    color: 'white'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: "red"
  },
  sidebarBackgroundStyles:{
    backgroundColor: 'rgba(87, 94, 119, .8)',
    width: "100%",
    height: "100%"
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundImage: `url(${AppConfig.sidebarImage})`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(2, 1, 1, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  logo:{
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: "center",
    padding: "20px 15px 5px 15px",
    "& img":{
      marginRight: "10px"
    }
  },
  avatar:{
    marginLeft: "1em",
    color: "#fff"
  },
  list: {
    color: "#fff",
  },
  listIcon:{
    color: "#fff"
}
}))

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

export default useStyles;
export {StyledBadge};