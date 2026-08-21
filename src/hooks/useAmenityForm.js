import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGoBack } from "./usePrevPage";
import { useForm } from "./useForm";
import { validateAmenity } from "../validations/amenityValidation";
import { createAmenity, getAmenityById, updateAmenity } from "../api/amenityApi";

export function useAmenityForm(){

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
            name: "",
        },
        validateAmenity
    );

    useEffect(() => {
        if (!id) return;

        const fetchAmenity = async () => {
            try {
                const a = await getAmenityById(id);

                setFormData({
                    name: a.name,
                   
                });
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchAmenity();
    }, [id, setFormData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;

            if(!validateForm()){
                return;
            }

            if (id) {
                response = await updateAmenity(id, formData);
            } else {
                response = await createAmenity(formData);
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