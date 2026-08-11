import { useEffect, useState } from "react";
import { confirmationHandler } from "../utils/sweetAlert";
import { toast } from "react-toastify";
import { deleteAmenity, getAmenities } from "../api/amenityApi";

export function useAmenity(){

    const [amenities, setAmenities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAmenities()
                .then(setAmenities)
                .catch((err) => setError(err.message))
                .finally(()=> setLoading(false));
    }, [])

    const removeAmenity = async(id) =>{
        
        const confirm = await confirmationHandler();
        if(!confirm) return;

        const response = await deleteAmenity(id);
        toast.success(response.data.message);
        
        setAmenities(prev => prev.filter(rp => rp.amenityId !== id));
    };
    
    return {amenities,removeAmenity,loading,error}
}