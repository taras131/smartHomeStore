import {makeStyles} from "@material-ui/core/styles";
import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import React from "react";
import backgroundprojectimg from "../../img/backgroundprojectimg.jpg";
import {useSelector} from "react-redux";
import ProjectItem from "./ProjectItem";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    subheader: {
        marginTop: theme.spacing(8),
        position: "relative",
        color: theme.palette.common.white,
        marginButton: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: theme.spacing(4),
    },
    content : {
        padding: theme.spacing(4),
    },
    items:{
        marginTop: theme.spacing(8),
    }

}))

const Project = () => {
    const classes = useStyles();
    const projectList = useSelector(state => state.projectInfo.projectList)
    const projectItems = projectList.map(item => <ProjectItem {...item}/>)
    return (
        <div>
            <Paper className={classes.subheader} style={{backgroundImage: `url(${backgroundprojectimg})`}}>
                <Container fixed>
                    <Grid container>
                        <Grid item xl={5} md={8} sm={10} xs={12}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography variant="h6" color="inherit" paragraph>
                                    «Умный дом» — это инженерная система, которая управляет средой вашего дома одним
                                    кликом или фразой, позволяет сохранить любимые сценарии и показывает состояние
                                    инженерных систем, увеличивая престиж, комфорт и безопасность вашего дома.Это не
                                    набор датчиков из магазина. Это серьезная инженерная система, которая требует
                                    проектирования, работает по проводам, закладывается на этапе черновой отделки и
                                    внедряется профессиональной командой.
                                </Typography>
                                <Button component={RouterLink} to="/contacts/" color="secondary" variant="contained">
                                    Связаться с нами
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <Paper className={classes.content }>
                <Container container>
                    <div>
                        <Typography color= "primary" align = "center" variant="h4">
                            Примеры проектов , реализованных MAKAROFF Company:
                        </Typography>
                        <Typography color= "primary" align = "center" variant="h6">
                            За 15 лет мы автоматизировали более 1 000 000 м2 квартир, загородных домов и жилых комплексов.
                        </Typography>
                        <Grid className={classes.items} container spacing={4}>
                            {projectItems}
                        </Grid>
                    </div>
                </Container>
            </Paper>
        </div>
    )
}
export default Project