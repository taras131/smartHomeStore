import {
    AppBar,
    Box,
    Container, Hidden,
    IconButton,
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
        return (
            <AppBar>
                <Container position="fixed">
                    <Toolbar fixed>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h5" className={classes.title}>
                            <Link component={RouterLink} to="/">
                                <div className={classes.titleText}>
                                    Умный дом
                                    <Hidden smDown>
                                        уже сейчас
                                    </Hidden>
                                </div>
                            </Link>
                        </Typography>
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
