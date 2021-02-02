import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {useDispatch} from "react-redux";
import {addCart} from "../../redux/cartReducer";

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
                    <Button size="small" color="primery">
                        Просмотреть
                    </Button>
                    <Button onClick={onAddClick} size="small" color="primery">
                        В корзину
                    </Button>
                    <LayerIcon/>
                    <PlayCircleFilledIcon/>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CardItem