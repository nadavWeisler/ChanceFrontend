import { Grid } from '@material-ui/core'
import React from 'react'
import { data } from '../../assets/dashboardData'
import { Internship, InternshipProps } from './Internship'

export const Dashboard = () => {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
            {
                data.map((option: InternshipProps) => (
                    <Grid item xs={12} sm={6} md={3} key={data.indexOf(option)}>
                        <Internship
                            name={option.name}
                            imgLink={option.imgLink}
                            company={option.company}
                            detail={option.detail}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}