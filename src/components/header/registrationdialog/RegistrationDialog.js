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



const RegistrationDialog = () => {
    const [open, setOpen] = useState(false)
    const onRegistrationClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const onRegistration = (e)=>{
        setOpen(false)
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
                    <TextField autoFocus margin="dense" label="Email" type="email" fullWidth/>
                    <TextField margin="dense" label="Password" type="password" fullWidth/>
                    <TextField margin="dense" label="Repeated Password" type="password" fullWidth/>
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