import { useEffect, useState } from "react";
import { confirmationHandler } from "../utils/sweetAlert";
import { toast } from "react-toastify";
import { deleteRolePermission, getRolePermissions } from "../api/rolePermissionApi";

export function useRolePermission(){

    const [rolePermissions, setRolePermissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRolePermissions()
                .then(setRolePermissions)
                .catch((err) => setError(err.message))
                .finally(()=> setLoading(false));
    }, [])

    const removeRolePermission = async(id) =>{
        
        const confirm = await confirmationHandler();
        if(!confirm) return;

        const response = await deleteRolePermission(id);
        toast.success(response.message);
        
        setRolePermissions(prev => prev.filter(rp => rp.rpId !== id));
    };
    
    return {rolePermissions,removeRolePermission,loading,error}
}