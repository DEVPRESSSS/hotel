import { useState, useEffect } from "react";
import { fetchPermissions } from "../api/permissionApi";

export function usePermission() {
    const [permissions, setPermission] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPermissions()
            .then(setPermission)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { permissions, loading, error };
}