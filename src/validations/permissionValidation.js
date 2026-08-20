export function validatePermission(formData) {

    const errors = {};

    // Validate permission
    if (!formData.name.trim()) {
        errors.name = "Permission name is required.";
    }

    return errors;
}