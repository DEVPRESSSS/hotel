import { useEffect, useState } from "react";
import { deleteRoomType, getRoomTypes } from "../api/roomType";
import { confirmationHandler } from "../utils/sweetAlert";
import { toast } from "react-toastify";

export function useRoomType(){
    const [roomTypes, setRoomType] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRoomTypes()
        .then(setRoomType)
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, [])

    //Remove room type
    const removeRoomType = async(id) =>{
        
        //Check the id if not empty or null or undefined
        if(!id) return;
        
        //Ask confirmation first
        const confirm = await confirmationHandler();
        if(!confirm) return;

        const response = await deleteRoomType(id);
        toast.success(response.data.message);
        setRoomType(prev =>prev.filter(rt =>rt.roomTypeId  !== id));
    };

    
    return {roomTypes, removeRoomType, loading, error};
}