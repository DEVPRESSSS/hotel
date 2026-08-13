import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createRoomType, getRoomTypeId, updateRoomType } from "../api/roomType";
import { toast } from "react-toastify";
import { useGoBack } from "./usePrevPage";
import { useForm } from "./useForm";
import { validateRoomType } from "../validations/roomTypeValidation";

export function useRoomTypeForm(){

    const navigate = useNavigate();
    const cancel = useGoBack();

    const { id } = useParams();

    const {
        formData,
        setFormData,
        handleChange,
        errors,
        validateForm,
    } = useForm(
        {
            roomTypeName: "",
            pricePerNight: "",
        },
        validateRoomType
    );

  

    useEffect(() => {
        if (!id) return;

        const fetchRoom = async () => {
            try {
                const rt = await getRoomTypeId(id);

                setFormData({
                    roomTypeName: rt.roomTypeName,
                    pricePerNight: rt.pricePerNight,
                   
                });
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchRoom();
    }, [id, setFormData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;

            if(!validateForm()){
                return;
            }

            if (id) {
                response = await updateRoomType(id, formData);
            } else {
                response = await createRoomType(formData);
            }

            toast.success(response.data.message);
            navigate("/roomtype");

        } catch (error) {
            toast.error(error.message);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        cancel,
        errors
    };
        
  
}