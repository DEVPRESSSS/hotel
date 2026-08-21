import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGoBack } from "./usePrevPage";
import { useForm } from "./useForm";
import { validateAmenity } from "../validations/amenityValidation";
import { createPermission, getPermissionById, updatePermission } from "../api/permissionApi";

export function usePermissionForm(){

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

        const fetchPermission = async () => {
            try {
                const a = await getPermissionById(id);

                setFormData({
                    name: a.name,
                   
                });
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchPermission();
    }, [id, setFormData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;

            if(!validateForm()){
                return;
            }

            if (id) {
                response = await updatePermission(id, formData);
            } else {
                response = await createPermission(formData);
            }

            toast.success(response.data.message);
            navigate("/permission");

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