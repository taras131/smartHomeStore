import {Avatar, Icon, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {deepPurple, green} from '@material-ui/core/colors';
import IndeterminateCheckBoxTwoToneIcon from '@material-ui/icons/IndeterminateCheckBoxTwoTone';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import IconButton from "@material-ui/core/IconButton";
import {useDispatch} from "react-redux";
import {deleteItemCart, minusItemCart, plusItemCart} from "../../redux/cartReducer";

const useStyles = makeStyles((theme) => ({
    img: {
        maxWidth: 70,
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        marginRight: theme.spacing(2)
    },
    plus: {
        marginRight: theme.spacing(2)
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
        <ListItem button>
            <ListItemIcon>
                <img className={classes.img} src={props.url} alt=""/>
            </ListItemIcon>
            <ListItemText className={classes.title} primary={props.name}/>
            <Avatar variant="square" className={classes.purple}>
                {props.count}
            </Avatar>
            <IconButton disabled = {+props.count === 1} onClick={onMinusClick} aria-label="delete">
                <IndeterminateCheckBoxTwoToneIcon>add_circle</IndeterminateCheckBoxTwoToneIcon>
            </IconButton>
            <IconButton onClick={onPlusClick} aria-label="delete">
                <AddBoxTwoToneIcon  style={{color: green[500]}}>add_circle</AddBoxTwoToneIcon>
            </IconButton>
            <IconButton onClick={onDeleteClick} aria-label="delete">
                <DeleteForeverTwoToneIcon style={{color: green[500]}}>add_circle</DeleteForeverTwoToneIcon>
            </IconButton>

        </ListItem>
    )
}

export default CartItem