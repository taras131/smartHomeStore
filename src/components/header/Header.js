import {
    AppBar,
    Box, Button, ButtonGroup,
    Container, Hidden,
    IconButton, Tab, Tabs,
    Toolbar,
    Typography, withWidth
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import EntranceDialog from "./entrancedialog/EntranceDialog";
import RegistrationDialog from "./registrationdialog/RegistrationDialog";
import CartIcon from "./carticon/CartIcon";
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import MobilMenu from "./mobilmenu/MobilMenu";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1,

    },
    titleText: {
        color: theme.palette.common.white
    }

}))
// <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
//    <MenuIcon/>
//</IconButton>
const Header = (props) => {
    const classes = useStyles();
    const {width} = props;
    return (
        <AppBar>
            <Container position="fixed">
                <Toolbar fixed>
                    <Hidden mdUp>
                        <MobilMenu/>
                    </Hidden>
                    <Typography variant="h5" className={classes.title}>
                        <Link component={RouterLink} to="/">
                            <div className={classes.titleText}>
                                Умный дом {""}
                                <Hidden mdDown>
                                    уже сейчас
                                </Hidden>
                            </div>
                        </Link>
                    </Typography>
                    <Hidden smDown>
                        <Box>
                            <ButtonGroup variant="contained" color="primary"
                                         aria-label="contained primary button group">
                                <Button component={RouterLink} to="/">Главная</Button>
                                <Button>Проекты</Button>
                                <Button>Контакты</Button>
                                <Button component={RouterLink} to="/cart">Корзина</Button>
                            </ButtonGroup>
                        </Box>
                    </Hidden>
                    <Link component={RouterLink} to="/cart/">
                        <Box mr={3}>
                            <CartIcon/>
                        </Box>
                    </Link>
                    <Box mr={3}>
                        <EntranceDialog/>
                    </Box>
                    <RegistrationDialog {...width}/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default withWidth()(Header);
