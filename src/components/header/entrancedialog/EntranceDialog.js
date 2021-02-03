import {
    Box,
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

const EntranceDialog = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const onEntranceClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleEntrance = () => {
        setOpen(false)
        dispatch(setAuth(true))
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
                    <TextField autoFocus margin="dense" label="Email" type="email" fullWidth/>
                    <TextField margin="dense" label="Password" type="password" fullWidth/>
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