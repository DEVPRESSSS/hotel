import DataTable from 'react-data-table-component'

export function DataTablePage(props){
    return (
            <DataTable
                columns={props.columns}
                data={props.data}
                pagination
                paginationPerPage={5}
                responsive
                highlightOnHover
            />
    )
}
