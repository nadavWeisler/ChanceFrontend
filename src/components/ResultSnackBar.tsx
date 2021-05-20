import { Snackbar } from '@material-ui/core';
import { Alert, Color } from '@material-ui/lab';

export interface ResultSnackBarProps {
    open: boolean;
    handleClose: () => void;
    message: string;
    success?: true | undefined;
    autoHideDuration?: 6000 | undefined;
}
    
const GetSeverity = (success: boolean) : Color => {
    if (success) {
        return "success";
    } else {
        return "error";
    }
}

const getMessage = (success: boolean, message: string) : string => {
    if (success) {
        return "Success: " + message;
    } else {
        return "Error: " + message;
    }
}

export const ResultSnackBar = ({ open, handleClose, message, success = true, autoHideDuration = 6000 }: ResultSnackBarProps) => {
    return (
        <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
            <Alert onClose={handleClose} severity={GetSeverity(success)}>
                {getMessage(success, message)}
            </Alert>
        </Snackbar>
    );
}