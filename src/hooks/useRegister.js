import { toast } from "react-toastify";
import { register } from "../api/registerApi";
import { useNavigate } from "react-router-dom";

export function useRegister() {
    const navigate = useNavigate();

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

        try {
            const result = await register(data);

            if (!result) {
                toast.error("Failed to register. Please try again!");
                return;
            }

            toast.success("Registered successfully!");
            navigate("/login");

        } catch (error) {
            toast.error(error.message || "Registration failed!");
        }
    }

    return { handleSubmit };
}