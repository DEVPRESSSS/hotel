export function TableWrapperPage({title, headerAction, children}){
    return(
        <div className="bg-white p-4 border-t-2 border-gray-100 shadow-sm">
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