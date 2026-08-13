// Define validation rules specific to the Room form
export function validateAmenity(formData) {

    const errors = {};

    // Validate room number
    if (!formData.name.trim()) {
        errors.name = "Amenity name is required.";
    }

    return errors;
}