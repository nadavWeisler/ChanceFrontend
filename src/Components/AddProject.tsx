import React, { useReducer, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
<<<<<<< HEAD
import { Avatar, Checkbox, Dialog } from '@material-ui/core';
=======
import { Avatar, Checkbox, duration } from '@material-ui/core';
>>>>>>> 9752c499fce8c5a41679adf6e0ef08e8c704466c
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

<<<<<<< HEAD
=======
type State =
    {
        projectName: string
        duration: number
        difculty: number
        aplydate: string
        submitdate:string
        topic:string
        tags: string
        description: string
    };

const initialState: State = {
    projectName: 'demo',
    duration: 0,
    difculty: 0,
    aplydate: '01/01/2000',
    submitdate: '01/01/2000',
    topic: '',
    tags: '',
    description: ''
};

>>>>>>> 9752c499fce8c5a41679adf6e0ef08e8c704466c
const AvailableThemes = ["hard", "medium", "easy"];

export interface AddProjectProps {
    openDialog: boolean;
    onClose: () => void;
}

export const AddProject = (props: AddProjectProps) => {
    const classes = useStyles();
<<<<<<< HEAD
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
=======
    const [projectName, setName] = useState<string>("")
    const[duration, setDuration] = useState<number>(0)
    const [aplydate, setAdate] = useState<string>("")
    const [submitdate, setSdate] = useState<string>("")
    const [dificulty, setDificulty] = useState<number>(0)
    const [topic, setTopic] = useState<string>("")
    const [tags, setTag] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const handleNameChange = (event: any) => {
        setName(event.target.value)
    };

    const handleAdate = (event: any) => {
        setAdate(event.target.value)
    };

    const handleSdate = (event: any) => {
        setSdate(event.target.value)
    };

    const handleDurationChange = (event: any) => {
        setDuration(event.target.value)
    };

    const handleDificultyChange = (event: any) => {
        setDificulty(event.target.value)
    };

    const handleTopic = (event: any) =>
    {
        setTopic(event.target.value)
    };

    const handleTagChange = (event: any) => {
        setTag(event.target.value)
    };

    const handleDescription = (event: any) =>
    {
        setDescription(event.target.value)
    }

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <Card className={classes.card}>
                <CardHeader className={classes.header} title="Add Project" />
                <CardContent>
                    <div>
                        <TextField
                            fullWidth
                            id="name"
                            type="name"
                            label="Name"
                            placeholder="Title"
                            margin="normal"
                            onChange={handleNameChange}
                        />
                        <TextField
                            fullWidth
                            id="aplication"
                            type="date"
                            label="last apllication"
                            defaultValue="2017-05-24"
                            margin="normal"
                            onChange={handleAdate}
                        />
                        <TextField
                            fullWidth
                            id="date"
                            type="date"
                            label="due date"
                            defaultValue="2017-05-24"
                            margin="normal"
                            onChange={handleSdate}
                        />
                        <TextField
                            fullWidth
                            id="duration"
                            type="length"
                            label="Duration"
                            placeholder="Duration"
                            margin="normal"
                            onChange={handleDurationChange}
                        />
                        <TextField
                            fullWidth
                            id="description"
                            type="description"
                            label="description"
                            placeholder=""
                            margin="normal"
                            onChange={handleDescription}
                        />
                        <TextField
                            fullWidth
                            id="topic"
                            type="topic"
                            label="topic"
                            placeholder="machin learning"
                            margin="normal"
                            onChange={handleTopic}
                        />
                        <TextField
                            fullWidth
                            id="topics"
                            type="topics"
                            label="tags"
                            placeholder="#python"
                            margin="normal"
                            onChange={handleTagChange}
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
                                        onChange={handleDificultyChange}
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
                                disabled={false}>
                                submit
>>>>>>> 9752c499fce8c5a41679adf6e0ef08e8c704466c
                    </Button>
                    </CardActions>
                </Card>
            </form>
        </Dialog>
    );
}

export default AddProject;
