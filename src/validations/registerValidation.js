export function validateRegister(formData) {
    const errors = {};

    const firstName = formData.firstName?.trim();
    const lastName = formData.lastName?.trim();
    const email = formData.email?.trim();
    const password = formData.password ?? "";

    if (!firstName) {
        errors.firstName = "First name is required.";
    }

    if (!lastName) {
        errors.lastName = "Last name is required.";
    }

    if (!email) {
        errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
    }

    return errors;
}