import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import empty from "../../img/cartEmpty.png";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    cartEmptyWrapper: {
        position: "relative",
        color: theme.palette.common.black,
        marginButton: theme.spacing(8),
        backgroundImage: `url(${empty})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: 900,
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(9),
        marginTop: theme.spacing(3)
    }

}))
const EmptyCart = () => {
    console.log("EmptyCart")
    const classes = useStyles()
    return (<div>
        <Container  fixed>
            <Paper className={classes.cartEmptyWrapper}>
                    <Grid justify="center" container>
                        <Grid  item md={8}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography variant="h5" color="inherit" paragraph>
                                    Вероятней всего, вы ещё ничего заказывали.<br/>
                                    Для того, чтобы сделать заказ, перейди на главную страницу.
                                </Typography>
                                <Button variant="contained" color="secondary" component={RouterLink} to="/">
                                    Вернуться на главную
                                </Button>
                            </div>
                        </Grid>
                    </Grid>

            </Paper>
        </Container>
        </div>
    )
}

export default EmptyCart