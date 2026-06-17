import DataTable from 'react-data-table-component'
import { Link  } from 'react-router-dom';

export function DataTablePage(props){
    return (
       <div className="bg-white rounded-lg p-4 shadow-sm border-t-4 border-teal-600">

            {/* Header */}
            <div className="flex items-center justify-between mb-2 p-2
                    border-b-2 border-gray-100">
                <h6 className="font-semibold text-gray-700 ">
                    Manage {props.name.toLowerCase()} 
                </h6>
                <Link
                    to="/addroom"
                    className="text-sm border-2 border-teal-700 text-teal-700 px-4 py-1.5 rounded-lg
                               hover:bg-teal-700 hover:text-white transition-colors duration-150"
                >
                    Create {props.name.toLowerCase()}
                </Link>
            </div>

            {/* Table */}
            <DataTable
                columns={props.columns}
                data={props.data}
                pagination
                paginationPerPage={5}
                responsive
                highlightOnHover
            />

        </div>
    )
}
