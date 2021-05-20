import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import { Avatar, Checkbox } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { FormControlLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';


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
    card: {
      marginTop: theme.spacing(10)
    }
  })
);

type State = 
{
    project_name: string
    hard: boolean
    medium: boolean
    easy: boolean
    date: string   
    image: string
    topics: Array<string>    
    description : string  
};

const initialState: State = {
    project_name: 'demo',
    hard: false,
    medium: false, 
    easy: false,
    date: '01/01/2000',
    image: 'path', 
    topics: [],
    description: ''
};

export const AddProject = () => {
    const classes = useStyles();
    return(
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
                            placeholder="Name"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            id="date"
                            type="date"
                            label="submit date"
                            placeholder="01/01/2020"
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
                            id="topics"
                            type="topics"
                            label="tags"
                            placeholder="#python"
                            margin="normal"
                        />
                        <Typography variant="h6" component="h6">
                            hard
                        </Typography>
                        <Checkbox
                            value="hard"
                            inputProps={{ 'aria-label': 'Checkbox A' }}
                        />
                        <Typography variant="h6" component="h6">
                            meduim
                        </Typography>
                        <Checkbox
                            value="medium"
                            inputProps={{ 'aria-label': 'Checkbox A' }}
                        />
                        <Typography variant="h6" component="h6">
                            easy
                        </Typography>
                        <Checkbox
                            value="easy"
                            inputProps={{ 'aria-label': 'Checkbox A' }}
                        />
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
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
}

export default AddProject;
