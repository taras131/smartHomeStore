import {makeStyles} from "@material-ui/core/styles";
import {BottomNavigationAction,Typography} from "@material-ui/core";
import {BottomNavigation} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link as RouterLink} from "react-router-dom";
import {useLocation} from "react-router";

const useStyles = makeStyles((theme) => ({
    footerWrapper:{
        marginTop: theme.spacing(6)
    }
}))
const FooterComponent = () => {
    const classes = useStyles()
    return (
        <footer className={classes.footerWrapper}>
            <BottomNavigation value={useLocation().pathname}  className={classes.root}>
                <BottomNavigationAction label="Главная" value="/" icon={<HomeIcon/>}
                                        component={RouterLink} to="/"/>
                <BottomNavigationAction label="Каталог" value="/catalog/" icon={<MenuBookIcon/>}
                                        component={RouterLink} to="/catalog/"/>
                <BottomNavigationAction label="Проекты" value="/project/" icon={<PostAddIcon/>}
                                        component={RouterLink} to="/project/"/>
                <BottomNavigationAction label="Контакты" value="/contacts/" icon={<ContactPhoneIcon/>}
                                        component={RouterLink} to="/contacts/"/>
                <BottomNavigationAction label="Корзина" value="/cart/" icon={<ShoppingCartIcon/>}
                                        component={RouterLink} to="/cart/"/>
            </BottomNavigation>
            <Typography style={{marginTop: 10}} align="center" color="textSecondary" component="p" variant="subtitle1">
                разработано z-студия 2021 | support mossnabitkana@gmail.com
            </Typography>
        </footer>
    )
}

export default FooterComponent