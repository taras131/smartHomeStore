import {Button} from "@material-ui/core";
import React from "react";
import {addCart} from "../../redux/cartReducer";
import {useDispatch, useSelector} from "react-redux";
import {getItemCount} from "../../redux/cartSelector";
import {withStyles} from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {addAlert} from "../../redux/alertReducer";

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -5,
        top: 7,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const ButtonBuy = (props) => {

    const dispatch = useDispatch()
    const onAddClick = () => {
        dispatch(addCart({...props}))
        dispatch(addAlert("Товар успешно добавлен в корзину"))
    }
    const countItem = useSelector(state => getItemCount(state,props.id))
    return(
        <Button  variant="contained" color="primary" onClick={onAddClick} size="small">
            Купить
            { countItem &&
            <StyledBadge style ={{marginLeft: 7}} badgeContent={countItem} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>}

        </Button>
    )
}

export default ButtonBuy