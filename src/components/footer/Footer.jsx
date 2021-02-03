import {makeStyles} from "@material-ui/core/styles";
import {BottomNavigationAction, Container, Typography} from "@material-ui/core";
import {BottomNavigation} from "@material-ui/core";
import {useState} from "react";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles((theme) => ({
    footerWrapper:{
        marginTop: theme.spacing(6)
    }
}))
const FooterComponent = () => {
    const classes = useStyles()
    const [value, setValue] = useState("recents")
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <footer className={classes.footerWrapper}>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>}/>
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>}/>
            </BottomNavigation>
            <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
                разработано z-студия 2021
            </Typography>
        </footer>
    )
}

export default FooterComponent