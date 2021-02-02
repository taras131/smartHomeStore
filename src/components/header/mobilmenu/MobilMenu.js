import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import {Button, ButtonGroup, Drawer, MenuItem, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import {Link as RouterLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1)
    },
    fullList: {
        width: 250,
        margin: theme.spacing(6)
    },
    menuItem:{
        marginTop: theme.spacing(2)

    }
}))

const MobilMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const onMenuClick = () => {
        setOpen(!open)
    }
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(false)
    };
    return (
        <div>
            <IconButton onClick={onMenuClick} edge="start" color="inherit" aria-label="menu"
                        className={classes.menuButton}>
                <MenuIcon/>
            </IconButton>
            <Drawer width={200} open={open} onClose={toggleDrawer(false)}>
                <div className={classes.fullList}>
                    <MenuItem onClick={onMenuClick} className={classes.menuItem} component={RouterLink} to="/">
                        <Typography variant="h4">Главная</Typography>
                    </MenuItem>
                    <MenuItem onClick={onMenuClick} className={classes.menuItem}>
                        <Typography variant="h4">Проекты</Typography>
                    </MenuItem>
                    <MenuItem  onClick={onMenuClick}className={classes.menuItem}>
                        <Typography variant="h4">Контакты</Typography>
                    </MenuItem>
                    <MenuItem onClick={onMenuClick} className={classes.menuItem} component={RouterLink} to="/cart">
                        <Typography variant="h4">Корзина</Typography>
                    </MenuItem>
                </div>
            </Drawer>
        </div>
    )
}

export default MobilMenu