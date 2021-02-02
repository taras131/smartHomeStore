import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import CardItem from "../carditem/CardItem";
import backgroundimg from "../../img/header.jpg";

const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginButton: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(9),
        marginTop: theme.spacing(3)
    }

}))
const Main = () => {
    const classes = useStyles()
    const cardList = useSelector(state => state.cardInfo.cardList)
    const cardItems = cardList.map((item,index )=> <CardItem key ={`${item.name}_${index}`} {...item}/>)
    return(
        <main>
            <Paper className={classes.mainFeaturesPost}
                   style={{backgroundImage: `url(${backgroundimg})`}}>
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item xl ={6} md={8}  sm={10}  xs={12}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography component="h1" variant="h4" color="inherit" gutterBottom>
                                    УМНЫЕ СИСТЕМЫ ДЛЯ КОМФОРТА, ЭКОНОМИИ И БЕЗОПАСНОСТИ.
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                    MAKAROFF Company является поставщиком современных интеллектуальных и
                                    энергоэффективных решений в сфере автоматизации зданий.
                                </Typography>
                                <Button color="secondary" variant="contained">Узнать больше...</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <div className={classes.mainContent}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Пока так
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        MAKAROFF Company является поставщиком современных интеллектуальных и
                        энергоэффективных решений в сфере автоматизации зданий, систем «Умный Дом» и
                        Аудио-Видео решений для девелоперов, владельцев частной и коммерческой
                        недвижимости в России. Профессионализм нашей команды подтверждают не только
                        наши клиенты, но и полученные в национальных и международных премиях награды
                    </Typography>
                    <div className={classes.mainButtons}>
                        <Grid container spacing={5} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">Заказать</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">Узнать больше</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cardItems}
                </Grid>
            </Container>
        </main>
    )
}
export default Main