import { useLocation } from "react-router-dom"

export function UpsertFormPage(){
    const location = useLocation();
    const entityName = location.state?.entityName || "";
    return (
        <div className="w-full shadow-sm p-2">
            <div className="flex flex-col w-full">
                    <div className="flex-1">
                        <h5>Create {entityName}</h5>
                    </div>
                    <div className="flex-1">
                    </div>
            </div>
        </div>
    )
}
