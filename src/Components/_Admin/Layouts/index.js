import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header';
import SiderBar from '../SideBar/SiderBar';
import useStyles from './styles';

function Dashboard(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);


    const handleToggleDrawer = () => {
        setOpen(!open);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header
                open={open}
                handleToggleDrawer={handleToggleDrawer}
            />
            <SiderBar
                open={open}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
}

export default Dashboard;