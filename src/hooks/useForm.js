import { useState } from "react";

export function useForm(initialValues, validate) {

    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }));
    };

    const validateForm = () => {
        const validationErrors = validate(formData);

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    return {
        formData,
        setFormData,
        handleChange,
        errors,
        validateForm
    };
}