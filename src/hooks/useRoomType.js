import { useEffect, useState } from "react";
import { fetchRoomType } from "../api/roomType";

export function useRoomType(){
    const [roomTypes, setRoomType] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRoomType()
        .then(setRoomType)
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, [])
    
    return {roomTypes, loading, error};
}