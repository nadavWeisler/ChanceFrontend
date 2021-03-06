import { Grid } from '@material-ui/core'
import { SearchBox } from '../Searchbox'
import { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { Internship } from '../../types/internship'
import { SingleInternship } from './SingleInternship'

export const Dashboard = () => {    
    const { internships } = useTypedSelector(state => state.internships)
    const { FetchInternships } = useActions()
    const [filterString, setFilterString] = useState<string>('');
    const [filteredList, setFilteredList] = useState<Array<Internship>>([]);    

    const getFliterOptions = (): Array<Internship> => (
        internships.filter(filterStr => {
            return filterStr.name.includes(filterString) ||
                filterStr.details.includes(filterString) || 
                filterString === ''
        })
    );

    useEffect(() => {
        FetchInternships();
        setFilteredList(getFliterOptions());
    }, [filterString]);

    const onFilter = (value: string) => {
        setFilterString(value);
        console.log(filterString);
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
                    filteredList.map((option: Internship) => (
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