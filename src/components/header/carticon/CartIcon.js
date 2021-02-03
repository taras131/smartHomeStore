import React from 'react';
import Badge from '@material-ui/core/Badge';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getCountAllCart} from "../../../redux/cartSelector";

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',

    },
}))(Badge);
const CartIcon = () => {
    const count = useSelector(state => getCountAllCart(state))
    return (
        <NavLink to="/cart/">
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={count} color="secondary">
                    <ShoppingCartIcon/>
                </StyledBadge>
            </IconButton>
        </NavLink>
    )
}
export default CartIcon
