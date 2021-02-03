import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Grow,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {useDispatch} from "react-redux";
import {addCart} from "../../redux/cartReducer";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        marginTop: theme.spacing(2),
        paddingTop: "56.25%"
    },
    cardContent:{
        flexGrow: 1
    },
    cardGrid:{
        marginTop: theme.spacing(4)
    },
    cardPrice:{
        marginTop: theme.spacing(2)
    }
}))

const CardItem = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const onAddClick = () => {
        dispatch(addCart({...props}))
    }
    return (
        < Grow in="true" style={{ transformOrigin: '0 0 0' }}
               {...(true && { timeout: 1000*props.id })}>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}
                               image={props.url}
                               title="image title"/>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {props.name}
                        </Typography>
                        <Typography>
                            {props.discription}
                        </Typography>
                        <Typography variant="h6" className={classes.cardPrice}>
                            Цена: {props.price} рублей
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={RouterLink} to={`/catalog/${props.id}`} size="small" color="primary">
                            Подробнее
                        </Button>
                        <Button variant="contained" color = "primary" onClick={onAddClick} size="small" >
                            В корзину
                        </Button>
                        <PlayCircleFilledIcon/>
                    </CardActions>
                </Card>
            </Grid>
        </Grow>

    )
}

export default CardItem