import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import { Avatar, Checkbox, Dialog } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {
    FormControl,
    FormLabel,
    FormControlLabel,
    FormGroup,
    Box
} from "@material-ui/core";
import { Dashboard } from '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        submitBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        },
    })
);

const AvailableThemes = ["hard", "medium", "easy"];

export interface AddProjectProps {
    openDialog: boolean;
    onClose: () => void;
}

export const AddProject = (props: AddProjectProps) => {
    const classes = useStyles();
    const { onClose, openDialog } = props;
    return (
        <Dialog open={openDialog} onClose={onClose}>
            <form className={classes.container} noValidate autoComplete="off">
                <Card>
                    <CardContent>
                        <div>
                            <TextField
                                fullWidth
                                id="name"
                                type="name"
                                label="Name"
                                placeholder="Title"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                id="aplication"
                                type="date"
                                label="last apllication"
                                defaultValue="2017-05-24"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                id="date"
                                type="date"
                                label="due date"
                                defaultValue="2017-05-24"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                id="duration"
                                type="length"
                                label="Duration"
                                placeholder="Duration"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                id="description"
                                type="description"
                                label="description"
                                placeholder=""
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                id="topic"
                                type="topic"
                                label="topic"
                                placeholder="machin learning"
                                margin="normal"
                            />
                            <TextField
                                fullWidth
                                id="topics"
                                type="topics"
                                label="tags"
                                placeholder="#python"
                                margin="normal"
                            />
                            <FormControl fullWidth component="fieldset" margin="normal">
                                <FormLabel component="legend" focused={false}>
                                </FormLabel>
                                <FormGroup aria-label="Temas" row={true}>
                                    {AvailableThemes.map((theme, i) => (
                                        <FormControlLabel
                                            key={theme}
                                            value={theme}
                                            label={theme}
                                            control={<Checkbox
                                                value="checkedA"
                                                inputProps={{ 'aria-label': 'Checkbox A' }}
                                            />}
                                        />
                                    ))}
                                </FormGroup>
                            </FormControl>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className={classes.submitBtn}
                            disabled={false}
                            href={'/'}
                        >
                            submit
                    </Button>
                    </CardActions>
                </Card>
            </form>
        </Dialog>
    );
}

export default AddProject;
