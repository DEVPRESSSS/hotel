export function TableWrapperPage({title, headerAction, children}){
    return(
        <div className="bg-white rounded-lg p-4 shadow-sm border-t-4 border-teal-600">
            {/* Header */}
            <div className="flex items-center justify-between mb-2 p-2
                    border-b-2 border-gray-100">
                <h6 className="font-semibold text-gray-700 ">{title}</h6>
                {headerAction}
            </div>
            {children}
        </div>
    )
}