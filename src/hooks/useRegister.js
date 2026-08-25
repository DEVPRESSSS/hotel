import { toast } from "react-toastify";
import { register } from "../api/registerApi";
import { useNavigate } from "react-router-dom";
import { useForm } from "./useForm";
import { validateRegister } from "../validations/registerValidation";

export function useRegister() {
    const navigate = useNavigate();
    const {
              formData,
              handleChange,
              errors,
              validateForm,
          } = useForm(
              {
                firstName : "",
                middleName : "",
                lastName: "",
                email: "",
                password: ""
              },
              validateRegister
    );

    async function handleSubmit(e) {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const middleName = e.target.middleName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const data = {
            firstName,
            middleName,
            lastName,
            email,
            password
        };

        if(!validateForm()) return;
        try {
            const result = await register(data);
            if (!result) {
                toast.error("Failed to register. Please try again!");
                return;
            }

            toast.success("Registered successfully!");
            navigate("/login");
            
        } catch (error){
            toast.error(error.response.data.message);
        }
    
    }

    return { handleSubmit, errors, formData, handleChange };
}