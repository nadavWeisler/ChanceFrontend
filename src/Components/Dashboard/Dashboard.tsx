import { Grid } from '@material-ui/core'
import { data } from '../../assets/dashboardData'
import { SearchBox } from '../Searchbox'
import React, { useEffect, useState } from 'react'
import { FetchInternships } from '../../store/actions/internship'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { Internship } from '../../types/internship'
import { SingleInternship } from './SingleInternship'

export const Dashboard = () => {
    const { internships } = useTypedSelector(state => state.internships)
    const { FetchInternships } = useActions()
    const [filterString, setFilterString] = useState<string>('');

    useEffect(() => {
        FetchInternships();
    }, []);

    const onFilter = (value: string) => {
        setFilterString(value);
    }

    return (
        <>
            <SearchBox onInputChange={onFilter} />
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {
                    internships.map((option: Internship) => (
                        <Grid item xs={12} sm={6} md={3} key={internships.indexOf(option)}>
                            <SingleInternship
                                name={option.name}
                                imgLink={option.imgLink}
                                company={option.company}
                                details={option.details}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}