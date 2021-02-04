import {Button, Grid, Paper, TextField, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {addAlert} from "../../redux/alertReducer";
import {useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
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
const ContactForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [name, setName] = useState(``)
    const [phone, setPhone] = useState(``)
    const [message, setMessage] = useState(``)
    const [errorName, setErrorName] = useState(``)
    const [errorPhone, setErrorPhone] = useState(``)
    const [errorMessage, setErrorMessage] = useState(``)
    const onSendClick = () => {
        if (name === ``) {
            setErrorName(" Поле должно быть заполненным")
        } else { setErrorName(``)}
        if (phone === ``) {
            setErrorPhone("Поле должно быть заполненным")
        } else {setErrorPhone(``)}
        if (message === ``) {
            setErrorMessage("Поле должно быть заполненным")
        } else {setErrorMessage(``)}
        if (!name || !phone || !message) return
        dispatch(addAlert("Выше сообщение усаешно отправлено"))
        console.log(name, phone, message)
        setName(``)
        setPhone(``)
        setMessage(``)
    }
    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onPhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const onMessageChange = (e) => {
        setMessage(e.target.value)
    }

    return (
        <Paper className={classes.content}>
            <Typography align="center" color="primary" variant="h5">Форма для
                связи </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField name="name" autoFocus id="filled-basic" label="Ваше имя"
                           variant="filled" value={name} fullWidth
                           helperText={errorName}
                           onChange={onNameChange}/>
                <TextField name="tel" id="filled-basic"
                           label="Телефон" variant="filled" fullWidth value={phone}
                           helperText={errorPhone}
                           onChange={onPhoneChange}/>
                <TextField name="message" id="filled-basic" label="Сообщение" variant="filled"
                           fullWidth value={message} onChange={onMessageChange} helperText={errorMessage}/>
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
    )
}

export default ContactForm