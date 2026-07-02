import { useState, useEffect } from "react";
import { fetchUser } from "../api/userApi";

export function useUser() {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUser()
            .then(setUser)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { users, loading, error };
}