import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setAuth} from "../../../redux/authReducer";
import {addAlert} from "../../../redux/alertReducer";

const EntranceDialog = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    let [email, setEmail] = useState(``)
    let [password, setPassword] = useState(``)
    let [errorEmail, setErrorEmail] = useState(``)
    let [errorPassword, setErrorPassword] = useState(``)
    const onEntranceClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleEntrance = () => {
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
        if (!email || !password) return
        setOpen(false)
        dispatch(setAuth(true))
        dispatch(addAlert(`Вы вошли как пользователь ${email}`))
        setEmail(``)
        setPassword(``)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <>
            <Button color="inherit" variant="outlined" onClick={onEntranceClick}>ВОЙТИ</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Вход
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>Войдите, чтобы воспользоваться Личным Кабинетом</DialogContentText>
                    <TextField onChange={onEmailChange} value = {email} autoFocus margin="dense"
                               label="Email" type="email" helperText={errorEmail} fullWidth/>
                    <TextField onChange={onPasswordChange} margin="dense" label="Password" type="password" fullWidth
                               value={password} helperText={errorPassword}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Отмена</Button>
                    <Button onClick={handleEntrance} color="primary">Войти</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default EntranceDialog