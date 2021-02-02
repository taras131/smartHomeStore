import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Container, Grid, Typography} from "@material-ui/core";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CartItem from "./CartItem";
import {useSelector} from "react-redux";
import {getCartList, getCountAllCart, getSumAllPriceCart} from "../../redux/CartSelector";
import EmptyCart from "./EmptyCart";
import {Link as RouterLink} from "react-router-dom";
import Order from "./Order";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 700,
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(12)
    },
    cardPrice: {
        marginTop: theme.spacing(2)
    }
}));

const Cart = () => {
    const classes = useStyles();
    const cartList = useSelector(state => getCartList(state))
    const allCount = useSelector(state => getCountAllCart(state))
    const allPriceSum = useSelector(state => getSumAllPriceCart(state))
    const cartItems = cartList.map(item => <CartItem {...item}/>)
    if (allCount === 0) {
        return <EmptyCart/>
    }
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid justify="center" container spacing={4}>
                <div align="center" className={classes.root}>
                    <List component="nav" aria-label="main mailbox folders">
                        {cartItems}
                    </List>
                    <Divider/>

                </div>
            </Grid>
            <Grid container spacing={5} justify="center">
                <Grid item>
                    <Typography variant="h6" className={classes.cardPrice}>
                        Всего {allCount}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" className={classes.cardPrice}>
                        На сумму {allPriceSum} рублей
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5} justify="center">
                <Grid item>
                    <Button component={RouterLink} to="/" variant="outlined" color="primary">Назад</Button>
                </Grid>
                <Grid item>
                    <Order allCount = {allCount} allPriceSum = {allPriceSum}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart