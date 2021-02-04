import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import {Alert} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {deleteAlert} from "../../redux/alertReducer";

export default function DirectionSnackbar() {
    const dispatch = useDispatch()
    const open = useSelector(state => state.alertInfo.isAlert)
    const message = useSelector(state => state.alertInfo.alertMessage)
    const [transition, setTransition] = useState(undefined);
    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
    };
    const handleClose = () => {
        dispatch(deleteAlert());
    };
    if(open){
        setTimeout(handleClose, 3000)
    }
    return (
        <div>
            <Button onClick={handleClick( <Slide  direction="down"/>)}>Down</Button>
            <Snackbar
                open={open}
                TransitionComponent={transition}
                key={transition ? transition.name : ''}
            >
                <Alert severity="success">{message}</Alert>
            </Snackbar>
        </div>
    );
}
