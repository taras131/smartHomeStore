import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Grid,
    TextField, Typography
} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    cardPrice: {
        marginTop: theme.spacing(2)
    }
}));
const Order = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const onOrderClick = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const onRegistration = (e) => {
        setOpen(false)
    }
    return (
        <>
            <Button color="primary" variant="contained" onClick={onOrderClick}>Купить</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Оформление
                </DialogTitle>
                <Grid container spacing={5} justify="center">
                    <Grid item>
                        <Typography variant="h7" className={classes.cardPrice}>
                            Всего {props.allCount}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h7" className={classes.cardPrice}>
                            На сумму {props.allPriceSum} рублей
                        </Typography>
                    </Grid>
                </Grid>
                <DialogContent>
                    <DialogContentText>Введите Ваши данные:</DialogContentText>
                    <TextField autoFocus margin="dense" label="Email" type="email" fullWidth/>
                    <TextField margin="dense" label="Telefon" type="tel" fullWidth/>
                    <TextField margin="dense" label="First Name" type="text" fullWidth/>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Отмена</Button>
                    <Button onClick={onRegistration} color="primary">Оформить</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default Order