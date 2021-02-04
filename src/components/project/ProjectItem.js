import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
    Zoom
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        marginTop: theme.spacing(2),
        paddingTop: "50.25%"
    },
    cardContent:{
        flexGrow: 5
    },
    container: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing(1),
    },
}))
const ProjectItem = (props) => {
    const classes = useStyles();
    return(
            <Grid item xs={12} sm={6} md={4}>
                <div className={classes.container}>
                    <Zoom in= "true" style={{ transformOrigin: '0 0 0' }}
                          {...{timeout: 300*props.id }}>
                        <Paper elevation={4} className={classes.paper}>
                            <Card>
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
                                </CardActions>
                            </Card>
                        </Paper>
                    </Zoom>
                </div>
            </Grid>
    )
}

export default ProjectItem