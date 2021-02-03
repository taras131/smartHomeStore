import {makeStyles} from "@material-ui/core/styles";
import {Button, Container, Grid, Paper, TextField, Typography} from "@material-ui/core";
import React, {useState} from "react";
import ExploreIcon from '@material-ui/icons/Explore';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

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
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),

        },
    },
    send: {
        marginTop: theme.spacing(4),
    }

}))

const Contacts = () => {
    const classes = useStyles()
    let [name, setName] = useState(``)
    let [telefon, setTelefon] = useState(``)
    let [message, setMessage] = useState(``)
    const onSendClick = () => {
        console.log(name, telefon, message)
        setName(``)
        setTelefon(``)
        setMessage(``)
    }
    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onTelefonChange = (e) => {
        setTelefon(e.target.value)
    }
    const onMessageChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div>
            <Paper className={classes.wrapper}>
                <Container fixed>
                    <Typography align="center" color="primary" variant="h3">Найдите нас:</Typography>
                    <Grid justify="center" container spacing={4}>
                        <iframe className={classes.map}
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
                                                График работы: пн-вс, с 8:00 до 21:00 (мск)
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid  container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <ExploreIcon/>
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography noWrap>
                                                Москва, Россия, 119019 Кремлёвская набережная, 1с3
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <PhoneCallbackIcon/>
                                        </Grid>
                                        <Grid item>
                                            <Typography noWrap>
                                                8(800)80000000000
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <AlternateEmailIcon/>
                                        </Grid>
                                        <Grid item>
                                            <Typography noWrap>
                                                example@mail.com
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item md={12} lg={6} xs={12}>
                                <Paper className={classes.content}>
                                    <Typography align="center" color="primary" variant="h5">Форма для
                                        связи </Typography>
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <TextField name="name" autoFocus id="filled-basic" label="Ваше имя"
                                                   variant="filled" value={name} fullWidth
                                                   onChange={onNameChange}/>
                                        <TextField name="tel" onChange={onSendClick} id="filled-basic"
                                                   label="Телефон" variant="filled" fullWidth value={telefon}
                                                   onChange={onTelefonChange}/>
                                        <TextField name="message" id="filled-basic" label="Сообщение" variant="filled"
                                                   fullWidth value={message} onChange={onMessageChange}/>
                                        <Grid container justify="center">
                                            <Button type="submit" className={classes.send}
                                                    justify="center" variant="contained" color="primary"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        onSendClick(e)
                                                    }}>
                                                Отправить
                                            </Button>
                                        </Grid>
                                    </form>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </div>
    )
}

export default Contacts