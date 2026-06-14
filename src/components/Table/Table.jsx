import { Link } from "react-router-dom";

export function Table(props) {
    return (
        <div className="bg-white rounded-lg p-4 shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h6 className="font-semibold text-gray-700 capitalize">
                    {props.name} Management
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
            <table className="w-full">
                <thead>
                    <tr className="border-b-2 border-gray-100 text-left">
                        {props.tableHeader.map((x) => (
                            <th key={x.id} className="py-2 px-3 text-teal-700 font-bold uppercase tracking-wide text-xs">
                                {x.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                     {props.children}
                </tbody>
       
            </table>
        </div>
    );
}