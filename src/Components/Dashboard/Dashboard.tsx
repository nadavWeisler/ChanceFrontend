import { Grid } from '@material-ui/core'
import { data } from '../../assets/dashboardData'
import { Internship, InternshipProps } from './Internship'
import { SearchBox } from '../Searchbox'
import { useEffect, useState } from 'react'
import { FetchInternships } from '../../store/actions/internship'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

export const Dashboard = () => {
    const { internships } = useTypedSelector(state => state.internships)
    const { FetchInternships } = useActions()
    const [filterString, setFilterString] = useState<string>('');

    useEffect(() => {
        FetchInternships();
    }, [internships])
    
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
        </>
    )
}