import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCatalogItem} from "../../redux/catalogSelector";
import {addCart} from "../../redux/cartReducer";
import {makeStyles} from "@material-ui/core/styles";
import {useLocation} from "react-router";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    media: {
        marginTop: theme.spacing(2),

        maxWidth: "100%"
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    },
    cardPrice: {
        marginTop: theme.spacing(2)
    }
}))
const Discription = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    let id = +useLocation().pathname.split("/").pop()
    const item = useSelector(state => getCatalogItem(state, id))
    const onAddClick = () => {
        dispatch(addCart({...item}))
    }
    return (
        <Container style={{marginTop: 140}}  fixed>
            <Grid  container spacing={4}>
                <Grid md={6} lg={6} xs={6}>
                    <img src={item.discriptionUrl} className={classes.media} alt={item.name}/>
                </Grid>
                <Grid md={6} lg={6} xs={6}>
                    <Typography variant="h5" gutterBottom>
                        {item.name}
                    </Typography>
                    <Typography>
                        {item.discription}
                    </Typography>
                </Grid>
                <Grid style={{marginTop: 20}} md={12} lg={12} xs={12}>
                    <Typography>
                        {item.fullDiscription}
                    </Typography>
                </Grid>
                <Grid style={{marginTop: 20}} container spacing={5} justify="center">
                    <Grid item >
                        <Button component={RouterLink} to={`/catalog/`} size="small" color="primary">
                            Назад
                        </Button>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" >
                            Цена: {item.price} рублей
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" color="primary" onClick={onAddClick} size="small">
                            Купить
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Discription