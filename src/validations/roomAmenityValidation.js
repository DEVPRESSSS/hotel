export function validateRoomAmenity(formData) {

    const errors = {};

    if (!formData.roomId) {
        errors.roomId = "Room is required.";
    }
     if (!formData.amenityId) {
        errors.amenityId = "Amenity is required.";
    }

    return errors;
}