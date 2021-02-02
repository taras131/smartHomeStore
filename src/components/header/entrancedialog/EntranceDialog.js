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

const EntranceDialog = () => {
    const [open, setOpen] = useState(false)
    const onEntranceClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Button color="inherit" variant="outlined" onClick={onEntranceClick}>ВХОД</Button>
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
                    <Button onClick={handleClose} color="primary">Войти</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default EntranceDialog