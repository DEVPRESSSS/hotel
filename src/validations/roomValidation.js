// Define validation rules specific to the Room form
export function validateRoom(formData) {

    const errors = {};

    // Validate room number
    if (!formData.roomNumber.trim()) {
        errors.roomNumber = "Room number is required.";
    }

    // Validate capacity
    if (!formData.capacity) {
        errors.capacity = "Capacity is required.";
    } else if (Number(formData.capacity) <= 0) {
        errors.capacity = "Capacity must be greater than 0.";
    }

    // Validate room type
    if (!formData.roomTypeId) {
        errors.roomTypeId = "Please select a room type.";
    }

    // Validate floor
    if (!formData.floorId) {
        errors.floorId = "Please select a floor.";
    }

    return errors;
}