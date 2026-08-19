import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGoBack } from "./usePrevPage";
import { useForm } from "./useForm";
import { validateRoomAmenity } from "../validations/roomAmenityValidation";
import { createRoomAmenity, getRoomAmenityById, updateRoomAmenity } from "../api/roomAmenityApi";
import { useRooms } from "./useRooms";
import { useAmenity } from "./useAmenity";

export function useRoomAmenityForm(){

    const navigate = useNavigate();
    const cancel = useGoBack();

    const { id } = useParams();

    const { rooms } = useRooms();
    const roomsValue = useMemo(
        () => rooms.map(r => ({ id: r.roomId, name: r.roomNumber })),
        [rooms]
    );
    
    const {amenities} = useAmenity();
    const amenityValue = useMemo(
        () => amenities.map(a => ({ id: a.amenityId, name: a.name })),
        [amenities]
    );

    const {
        formData,
        setFormData,
        handleChange,
        errors,
        validateForm,
    } = useForm(
        {
            roomId: "",
            amenityId: "",
        },
        validateRoomAmenity
    );

    useEffect(() => {
        if (!id) return;

        const fetchRoomAmenity = async () => {
            try {
                const a = await getRoomAmenityById(id);

                setFormData({
                    roomId: a.roomId,
                    amenityId: a.amenityId,
                   
                });
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchRoomAmenity();
    }, [id, setFormData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;

            if(!validateForm()){
                return;
            }

            if (id) {
                response = await updateRoomAmenity(id, formData);
            } else {
                response = await createRoomAmenity(formData);
            }

            toast.success(response.data.message);
            navigate("/roomamenity");

        } catch (error) {
            toast.error(error.message);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        cancel,
        roomsValue,
        amenityValue,
        errors
    };
        
}