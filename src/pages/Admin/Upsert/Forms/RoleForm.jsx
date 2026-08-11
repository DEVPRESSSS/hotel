import { useLocation, useNavigate, useParams } from "react-router-dom"
import { TextInput } from "../../../../components/Forms/TextInput";
import { LabelStyle } from "../../../../components/Forms/LabelStyle";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useGoBack } from "../../../../hooks/usePrevPage";
import { createRole, getRoleById, updateRole } from "../../../../api/roleApi";

export function RoleFormPage() {
    const location = useLocation();
    const entityName = location.state?.entityName || "";

    const navigate = useNavigate();
    
    //Put the inputs in the UseState
    const [formData, setFormData] = useState({
       roleName: "",
    });

    //Handle change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) =>({
            ...prev,
            [name] : value
        }));
    };

    //Get the Id of the Permission
    const {id} = useParams();
    useEffect(() => {
        if (!id) return; 

        const fetchRole = async () => {
            try {
                const roleObj = await getRoleById(id);
                setFormData({
                    roleName: roleObj.roleName,   
                });
            } catch (error) {
                toast.error(`${error.message}`);
            }
        };

        fetchRole();
    }, [id]);

    //Handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let success;
            if (id) {
                success = await updateRole(id, formData);
            } else {
                success = await createRole(formData);
            }
            navigate("/role");
            toast.success(`${success.data.message}`);

        } catch (error) {
            toast.error(`${error.message}`);

        }
    };
    //Handle cancel button
    const cancel = useGoBack();

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
               
                        {/* Room type Name */}
                        <div>
                            <LabelStyle name="Role Name" />
                            <TextInput name="roleName"
                                     value={formData.roleName}
                                    onChange= {handleChange}
                                    placeholder="eg. FrontDesk" />
                        </div>
                        
                    </div>
                </div>

                {/* Footer actions */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={cancel}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 border-2 border-gray-300
                                hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-teal-700
                                hover:bg-teal-800 transition-colors duration-150 cursor-pointer"
                    >
                        Save 
                    </button>
                </div>
            </form>
        </div>
    )
}