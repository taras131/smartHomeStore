import {
    AppBar,
    Box, Button, ButtonGroup,
    Container, Hidden,
    Toolbar,
    Typography, withWidth
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import EntranceDialog from "./entrancedialog/EntranceDialog";
import RegistrationDialog from "./registrationdialog/RegistrationDialog";
import CartIcon from "./carticon/CartIcon";
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import MobilMenu from "./mobilmenu/MobilMenu";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../redux/authReducer";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

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
const Header = (props) => {
    const classes = useStyles();
    const {width} = props;
    const isAuth = useSelector(state => state.authInfo.isAuth)
    const dispatch = useDispatch()
    const onExitClick = () => {
        dispatch(setAuth(false))
    }
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
                                <Button component={RouterLink} to="/catalog/">Каталог</Button>
                                <Button component={RouterLink} to="/project/">Проекты</Button>
                                <Button component={RouterLink} to="/contacts/">Контакты</Button>

                            </ButtonGroup>
                        </Box>
                    </Hidden>
                    <Link component={RouterLink} to="/cart/">
                        <Box mr={3}>
                            <CartIcon/>
                        </Box>
                    </Link>
                    {!isAuth
                        ? <>
                            <Box mr={3}> <EntranceDialog/> </Box>
                            <RegistrationDialog {...width}/>
                        </>
                        : <>
                            <AccessibilityNewIcon color="secondary" style = {{paddingRight: 10}}/>
                            <Button color="inherit" variant="outlined" onClick={onExitClick}>ВЫЙТИ</Button>
                        </>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default withWidth()(Header);
