
import { ChangeEvent, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '10px 10px',
        margin: '10px 10px', 
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

interface SearchBoxProps {
    onInputChange: (value: string) => void;
}

export const SearchBox = ({ onInputChange }: SearchBoxProps) => {
    const classes = useStyles();
    const valueRef = useRef<string>('')

    return (
        <>
            <Divider />
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Filter Experiments"
                    onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                        onInputChange(event.target.value);
                    }}
                    inputRef={valueRef}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="filter">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Divider />
        </>
    );
}