import {useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Hidden,
    TextField
} from "@material-ui/core";
import {addAlert} from "../../../redux/alertReducer";
import {useDispatch} from "react-redux";

const RegistrationDialog = () => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const onRegistrationClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
    const [repeatedPassword, setRepeatedPassword] = useState(``)
    const [errorEmail, setErrorEmail] = useState(``)
    const [errorPassword, setErrorPassword] = useState(``)
    const [errorRepeatedPassword, setErrorRepeatedPassword] = useState(``)
    const onRegistration = () => {
        if (email === ``) {
            setErrorEmail(" Поле должно быть заполненным")
        } else {
            setErrorEmail(``)
        }
        if (password === ``) {
            setErrorPassword("Поле должно быть заполненным")
        } else {
            setErrorPassword(``)
        }
        if (repeatedPassword === ``) {
            setErrorRepeatedPassword("Поле должно быть заполненным")
        } else {
            setErrorRepeatedPassword(``)
        }
        if (!email || !password || !repeatedPassword) return
        if(password!==repeatedPassword){
            setErrorPassword("Пароли не совпадают")
            setErrorRepeatedPassword("Пароли не совпадают")
            return;
        }
        setOpen(false)
        setEmail(``)
        setPassword(``)
        setRepeatedPassword(``)
        dispatch(addAlert(`Вы успешно зарегестрированы. Ваш логин ${email}, пароль ${password}`))
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onRepeatedPasswordChange = (e) => {
        setRepeatedPassword(e.target.value)
    }
    return (
        <>
            <Hidden smDown>
                <Button color="secondary" variant="contained" onClick={onRegistrationClick}>РЕГИСТРАЦИЯ</Button>
            </Hidden>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    РЕГИСТРАЦИЯ
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>Введите Ваши данные</DialogContentText>
                    <TextField autoFocus margin="dense" label="Email" type="email" value={email}
                               helperText={errorEmail} fullWidth onChange={onEmailChange}/>
                    <TextField margin="dense" label="Password" type="password" fullWidth value={password}
                               helperText={errorPassword} onChange={onPasswordChange}/>
                    <TextField margin="dense" label="Repeated Password" type="password" fullWidth
                               value={repeatedPassword} helperText={errorRepeatedPassword}
                               onChange={onRepeatedPasswordChange}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Отмена</Button>
                    <Button onClick={onRegistration} color="primary">Зарегистрироваться</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default RegistrationDialog