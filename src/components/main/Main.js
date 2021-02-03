import {Button, Container, Grid, Grow, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import backgroundimg from "../../img/header.jpg";
import {Link as RouterLink} from "react-router-dom";
import React from "react";
import MainItem from "./MainIten";
import mainbackground2 from "../../img/mainbackground2.jpg"

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
    },
    mainContent: {
        marginTop: theme.spacing(3)
    }
}))
const Main = () => {
    const classes = useStyles()
    return (
        <main>
            <Paper className={classes.mainFeaturesPost}
                   style={{backgroundImage: `url(${backgroundimg})`}}>
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item xl={6} md={8} sm={10} xs={12}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography component="h1" variant="h4" color="inherit" gutterBottom>
                                    УМНЫЕ СИСТЕМЫ ДЛЯ КОМФОРТА, ЭКОНОМИИ И БЕЗОПАСНОСТИ.
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                    MAKAROFF Company является поставщиком современных интеллектуальных и
                                    энергоэффективных решений в сфере автоматизации зданий.
                                </Typography>
                                <Button component={RouterLink} to="/project/" color="secondary" variant="contained">Узнать
                                    больше...</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <div className={classes.mainContent}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" color="primary" gutterBottom>
                        Почему мы?
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        MAKAROFF Company является поставщиком современных интеллектуальных и
                        энергоэффективных решений в сфере автоматизации зданий, систем «Умный Дом» и
                        Аудио-Видео решений для девелоперов, владельцев частной и коммерческой
                        недвижимости в России. Профессионализм нашей команды подтверждают не только
                        наши клиенты, но и полученные в национальных и международных премиях награды
                    </Typography>
                    <div>
                        <Grid container spacing={5} justify="center">
                            <Grid item>
                                <Button component={RouterLink} to="/catalog/" variant="contained"
                                        color="primary">Заказать</Button>
                            </Grid>
                            <Grid item>
                                <Button component={RouterLink} to="/contacts/" variant="outlined" color="primary">Связаться
                                    с нами</Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.mainContent}>
                        <Typography variant="h2" align="center" color="primary" gutterBottom>
                            Чем управляет умный дом?
                        </Typography>
                        <Grid container spacing={5} justify="center">
                            <MainItem title ={"Освещение"}
                                      itemList = {["Светильники" ,"Розетки" ,"Шторы" ,"Рольставни", "Маркизы" ,"Жалюзи"]}/>
                            <MainItem title ={"Микроклимат"}
                                      itemList = {["Отопление"," Вентиляция", "Кондиционирование","Теплые полы" ,
                                          "Вытяжка в СУ", "Котельная"]}/>
                            <MainItem title ={"Безопасность"}
                                      itemList = {["Видеокамеры", "Домофон", "Сигнализация",
                                          "Защита от протечек", "Ворота", "Инженерные системs"]}/>
                            <MainItem title ={"Мультимедиа"}
                                      itemList = {["ТВ", "Колонки", "Проектор"," Экран", "Домашний кинотеатр", "Мультирум"]}/>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Paper className={classes.mainFeaturesPost}
                   style={{backgroundImage: `url(${mainbackground2})`, minHeight: 1000,  marginTop: 30}}>
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item xl={8} md={10} sm={10} xs={12}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography align= "center" variant="h5" color="inherit" paragraph>
                                    Мы внимательно изучим ваш проект и свяжемся в течение дня с предложением о сотрудничестве
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item>
                            <Button style={{marginTop: 240}} align= "center" component={RouterLink} to="/contacts/" color="secondary" variant="contained">
                                Написать нам
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </main>
    )
}
export default Main