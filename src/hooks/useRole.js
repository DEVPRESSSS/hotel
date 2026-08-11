import { useEffect, useState } from "react";
import { deleteRole, getRoles } from "../api/roleApi";
import { confirmationHandler } from "../utils/sweetAlert";
import { toast } from "react-toastify";

export function useRole(){

    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRoles()
                .then(setRoles)
                .catch((err) => setError(err.message))
                .finally(()=> setLoading(false));
    }, [])

    const removeRole = async(id) =>{
        
        const confirm = await confirmationHandler();
        if(!confirm) return;

        const response = await deleteRole(id);
        toast.success(response.data.message);
        
        setRoles(prev => prev.filter(role => role.roleId !== id));
    };
    
    return {roles,removeRole,loading,error}
}