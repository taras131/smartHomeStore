import {Grid, Paper, Slide, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: theme.spacing(2)
    }
}))
const MainItem = (props) => {
    const classes = useStyles()
    return (
        <Slide direction="up" in="true" mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
               {...{ timeout: 500 }}>
            <Grid xs={12} sm={6} md={3} item>
                <Paper className={classes.wrapper}>
                    <Typography variant="h5" align="center" color="primary">{props.title}</Typography>
                    <hr/>
                    <div>
                        {props.itemList.map((item,index) => {
                            return (
                                <Grid key = {`${item.name}_${index}`}container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <AddBoxIcon/>
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap>{item}</Typography>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </div>
                </Paper>
            </Grid>
        </Slide>
    )
}

export default MainItem