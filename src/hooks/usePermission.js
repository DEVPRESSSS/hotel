import { useState, useEffect } from "react";
import { deletePermission, getPermissions } from "../api/permissionApi";
import { confirmationHandler } from "../utils/sweetAlert";
import { toast } from "react-toastify";

export function usePermission() {
    const [permissions, setPermission] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getPermissions()
            .then(setPermission)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const removePermission = async(id) =>{

        const confirm = await confirmationHandler();
        if(!confirm) return;

        const response = await deletePermission(id);

        toast.success(response.data.message);
        setPermission(prev => prev.filter(p => p.permissionId !==id))

    };

    return { permissions, removePermission, loading, error };
}