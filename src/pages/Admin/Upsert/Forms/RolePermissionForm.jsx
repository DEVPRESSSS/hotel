import { useLocation, useParams } from "react-router-dom"
import { LabelStyle } from "../../../../components/Forms/LabelStyle";
import { DropdownInput } from "../../../../components/Forms/DropdownInput";
import { useEffect, useMemo, useState } from "react";
import { toast } from 'react-toastify';
import { useGoBack } from "../../../../hooks/usePrevPage";
import { useRole } from "../../../../hooks/useRole";
import { usePermission } from "../../../../hooks/usePermission";
import { createRolePermission, getRolePermissionById, updateRolePermission } from "../../../../api/rolePermissionApi";

export function RolePermissionFormPage() {
    const location = useLocation();
    const entityName = location.state?.entityName || "";

    //const navigate = useNavigate();
    //Handle cancel button
    const previousPage = useGoBack();

    //Fetch roles from API with the use of useMemo
    const { roles } = useRole();
    const rolesValue = useMemo(
        () => roles.map(rt => ({ id: rt.roleId, name: rt.roleName })),
        [roles]
    );
    //Fetch permission from API with the use of useFloor
    const {permissions} = usePermission();
    const permissionValue = useMemo(
        () => permissions.map(rt => ({ id: rt.permissionId, name: rt.name })),
        [permissions]
    );

    //Put the inputs in the UseState
    const [formData, setFormData] = useState({
     
       roleId : "" ,
       permissionId : ""
    });

    //Handle change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) =>({
            ...prev,
            [name] : value
        }));
    };

    //Get the Id of the Role
    const {id} = useParams();
    useEffect(() => {
        if (!id) return; 

        const fetchRolePermission = async () => {
            try {
                const rpObj = await getRolePermissionById(id);
                setFormData({
           
                    roleId: rpObj.roleId,
                    permissionId: rpObj.permissionId
                });
            } catch (error) {
                toast.error(`${error.message}`);
            }
        };

        fetchRolePermission();
    }, [id]);

    //Handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let success;
            if (id) {
                success = await updateRolePermission(id, formData);
            } else {
                success = await createRolePermission(formData);
            }
            previousPage();
            toast.success(`${success.message}`);

        } catch (error) {
            toast.error(`${error.message}`);

        }
    };

    return (
        <div className="w-full mx-auto bg-white shadow-md rounded-xl border-t-4 border-teal-700 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h5 className="text-lg font-semibold text-gray-800">
                    Create new {entityName}
                </h5>
                <p className="text-sm text-gray-500 mt-0.5">
                    Fill in the details below to add a new {entityName.toLowerCase() || "item"}.
                </p>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit}>
                <div className="px-6 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">

                        {/* Room Type */}
                        <div>
                            <LabelStyle name="Role" />
                            <DropdownInput 
                                    nameFor="role"
                                     name="roleId"
                                     value={formData.roleId}
                                     onChange= {handleChange}
                                     optionValue={rolesValue} />
                        </div>

                        {/* Floor */}
                        <div>
                            <LabelStyle name="Permission" />
                            <DropdownInput 
                                    nameFor="permission"
                                    name="permissionId" 
                                    value={formData.permissionId}
                                    onChange= {handleChange}
                                    optionValue={permissionValue}/>
                        </div>
                    </div>
                </div>

                {/* Footer actions */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={previousPage}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 border-2 border-gray-300
                                hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-teal-700
                                hover:bg-teal-800 transition-colors duration-150"
                    >
                        Save 
                    </button>
                </div>
            </form>
        </div>
    )
}