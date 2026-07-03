import { useEffect, useState } from "react";
import { fetchFloor } from "../api/floorApi";

export function useFloor(){
    const [floors, setFloors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFloor()
        .then(setFloors)
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, [])
    
    return {floors, loading, error};
}