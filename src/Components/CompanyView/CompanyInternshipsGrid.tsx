import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Internship, InternshipStatus } from '../../types/internship';

const columns: GridColDef[] = [
    { field: 'id', hide: true },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
];

export interface CompanyInternshipsGridProps {
    internships: Internship[]
}

export const CompanyInternshipsGrid = (props: CompanyInternshipsGridProps) => {
    const { internships } = props;

    const internshipToRow = () => (
        internships.map((internship) => {
            return {
                id: internship.name,
                name: internship.name,
                status: InternshipStatus.pending
            }
        })
    );

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={internshipToRow()} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}