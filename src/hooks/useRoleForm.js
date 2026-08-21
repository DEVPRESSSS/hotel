import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGoBack } from "./usePrevPage";
import { useForm } from "./useForm";
import { validateRole } from "../validations/roleValidation";
import { createRole, getRoleById, updateRole } from "../api/roleApi";

export function useRoleForm(){

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
        validateRole
    );

    useEffect(() => {
        if (!id) return;

        const fetchRoom = async () => {
            try {
                const a = await getRoleById(id);

                setFormData({
                    name: a.name,
                   
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
                response = await updateRole (id, formData);
            } else {
                response = await createRole(formData);
            }

            toast.success(response.data.message);
            navigate("/role");

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