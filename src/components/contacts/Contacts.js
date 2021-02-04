import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import React from "react";
import ExploreIcon from '@material-ui/icons/Explore';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ContactForm from "./ContactForm";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginTop: theme.spacing(12),
        padding: theme.spacing(5),
    },
    map: {
        paddingTop: theme.spacing(5),
    },
    content: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(4),
        minHeight: theme.spacing(20),
    },
}))
const Contacts = () => {
    const classes = useStyles()
    const {workingHours, address, phone, email} = useSelector(state=> state.contactInfo)
    return (
        <div>
            <Paper className={classes.wrapper}>
                <Container fixed>
                    <Typography align="center" color="primary" variant="h3">Найдите нас:</Typography>
                    <Grid justify="center" container spacing={4}>
                        <iframe className={classes.map} title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5340.7095572648805!2d37.61871275344421!3d55.74995918150521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1612347752446!5m2!1sru!2sru"
                                width="100%" height="630" frameBorder="0" allowFullScreen=""
                                aria-hidden="false" tabIndex="0"/>
                        <Grid justify="center" container spacing={4}>
                            <Grid item md={12} lg={6} xs={12}>
                                <Paper className={classes.content}>
                                    <Typography align="center" color="primary" variant="h5"> Контакты</Typography>
                                    <Grid style={{marginTop: 25}} container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <QueryBuilderIcon/>
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography noWrap>
                                                График работы: {workingHours}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid  container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <ExploreIcon/>
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography noWrap>
                                                {address}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <PhoneCallbackIcon/>
                                        </Grid>
                                        <Grid item>
                                            <Typography noWrap>
                                                {phone}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <AlternateEmailIcon/>
                                        </Grid>
                                        <Grid item>
                                            <Typography noWrap>
                                                {email}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item md={12} lg={6} xs={12}>
                                < ContactForm/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </div>
    )
}

export default Contacts