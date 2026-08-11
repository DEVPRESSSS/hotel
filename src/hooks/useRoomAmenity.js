import { useEffect, useState } from "react";
import { confirmationHandler } from "../utils/sweetAlert";
import { toast } from "react-toastify";
import { deleteRoomAmenity, getRoomAmenities } from "../api/roomAmenityApi";

export function useRoomAmenity(){

    const [roomAmenities, setRoomAmenities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRoomAmenities()
                .then(setRoomAmenities)
                .catch((err) => setError(err.message))
                .finally(()=> setLoading(false));
    }, [])

    const removeRoomAmenity = async(id) =>{
        
        const confirm = await confirmationHandler();
        if(!confirm) return;

        const response = await deleteRoomAmenity(id);
        toast.success(response.data.message);
        
        setRoomAmenities(prev => prev.filter(rp => rp.rpId !== id));
    };
    
    return {roomAmenities,removeRoomAmenity,loading,error}
}