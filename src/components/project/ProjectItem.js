import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    FormControlLabel,
    Grid,
    Paper, Slide, Switch,
    Typography,
    Zoom
} from "@material-ui/core";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import {makeStyles} from "@material-ui/core/styles";
import React, {useState} from "react";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        marginTop: theme.spacing(2),
        paddingTop: "50.25%"
    },
    cardContent:{
        flexGrow: 5
    },
    cardGrid:{
        marginTop: theme.spacing(4)
    },
    container: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing(1),
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },


}))

const ProjectItem = (props) => {
    const classes = useStyles();
    return(
            <Grid item xs={12} sm={6} md={4}>
                <div className={classes.container}>
                    <Zoom in= "true" style={{ transformOrigin: '0 0 0' }}
                          {...(true ? { timeout: 300*props.id } : {})}>
                        <Paper elevation={4} className={classes.paper}>
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
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primery">
                                        Просмотреть
                                    </Button>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Zoom>
                </div>
            </Grid>
    )
}

export default ProjectItem