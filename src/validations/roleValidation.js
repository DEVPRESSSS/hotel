export function validateRole(formData) {

    const errors = {};

    if (!formData.name.trim()) {
        errors.name = "Role is required.";
    }

    return errors;
}