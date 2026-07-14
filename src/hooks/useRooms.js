import { useState, useEffect } from "react";
import { deleteRoom, getRooms } from "../api/roomApi";
import { toast } from "react-toastify";

export function useRooms() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRooms()
            .then(setRooms)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    //Call the remove room to auto refresh
    const removeRoom = async(id) => {
        await deleteRoom(id);

        toast.success("Room deleted successfully!!");
        setRooms(prev => prev.filter(room => room.roomId !==id))
    };

    return { rooms,removeRoom, loading, error };
}