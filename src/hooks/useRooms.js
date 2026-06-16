import { useState, useEffect } from "react";
import { fetchRooms } from "../api/roomApi";

export function useRooms() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRooms()
            .then(setRooms)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { rooms, loading, error };
}