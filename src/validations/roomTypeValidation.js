// Define validation rules specific to the Room form
export function validateRoomType(formData) {

    const errors = {};

    // Validate room number
    if (!formData.roomTypeName.trim()) {
        errors.roomTypeName = "Room type name is required.";
    }

    // Validate capacity
    if (!formData.pricePerNight) {
        errors.pricePerNight = "Price per night is required.";
    } else if (Number(formData.pricePerNight) <= 0) {
        errors.pricePerNight = "Price per night must be greater than 0.";
    }

    return errors;
}