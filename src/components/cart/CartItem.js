import {Avatar, ListItem, ListItemIcon, ListItemText, Slide} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {deepPurple, green} from '@material-ui/core/colors';
import IndeterminateCheckBoxTwoToneIcon from '@material-ui/icons/IndeterminateCheckBoxTwoTone';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import IconButton from "@material-ui/core/IconButton";
import {useDispatch} from "react-redux";
import {deleteItemCart, minusItemCart, plusItemCart} from "../../redux/cartReducer";
import {Link as RouterLink} from "react-router-dom";
import {useLocation} from "react-router";

const useStyles = makeStyles((theme) => ({
    img: {
        maxWidth: 70,
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    title: {
        marginLeft: theme.spacing(2)
    }
}));
const CartItem = (props) => {
    const dispatch = useDispatch()
    const onDeleteClick = () => {
        dispatch(deleteItemCart(props.id))
    }
    const onPlusClick = () => {
        dispatch(plusItemCart(props.id))
    }
    const onMinusClick = () => {
        dispatch(minusItemCart(props.id))
    }
    const classes = useStyles();
    return (
        <Slide direction="up" in="true" mountOnEnter unmountOnExit style={{transformOrigin: '0 0 0'}}
               {...{timeout: 300 * props.id}}>
            <ListItem button component={RouterLink}
                      to={{pathname: `/catalog/${props.id}`, path: useLocation().pathname}}>
                <ListItemIcon>
                    <img className={classes.img} src={props.url} alt=""/>
                </ListItemIcon>
                <ListItemText component={RouterLink} to="/" className={classes.title} primary={props.name}/>
                <IconButton disabled={+props.count === 1} onClick={(e) => {
                    e.preventDefault()
                    onMinusClick()
                }} aria-label="delete">
                    <IndeterminateCheckBoxTwoToneIcon>add_circle</IndeterminateCheckBoxTwoToneIcon>
                </IconButton>
                <Avatar variant="square" className={classes.purple}>
                    {props.count}
                </Avatar>
                <IconButton onClick={(e) => {
                    e.preventDefault()
                    onPlusClick()
                }} aria-label="delete">
                    <AddBoxTwoToneIcon style={{color: green[500]}}>add_circle</AddBoxTwoToneIcon>
                </IconButton>
                <IconButton onClick={(e) => {
                    e.preventDefault()
                    onDeleteClick()
                }} aria-label="delete">
                    <DeleteForeverTwoToneIcon style={{color: green[500]}}>add_circle</DeleteForeverTwoToneIcon>
                </IconButton>
            </ListItem>
        </Slide>
    )
}

export default CartItem