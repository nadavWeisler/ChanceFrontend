import { data } from '../../assets/dashboardData'
import { InternshipProps } from './option.type'
import { Internship } from './internship'

export const Dashboard = () => {
    return (
        <>
            {
                data.map((option: InternshipProps) => {
                    return <Internship name={option.name} imgLink={option.imgLink} company={option.company} />
                })
            }
        </>
    )
}