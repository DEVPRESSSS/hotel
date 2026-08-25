export function validateLogin(formData) {

    const errors = {};

    if (!formData.email.trim()) {
        errors.email = "Email is required.";
    }
    if(!formData.password.trim()){
        errors.password = "Password is required.";
    }

    return errors;
}