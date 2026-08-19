// Define validation rules specific to the Room form
export function validateRoomAmenity(formData) {

    const errors = {};

    // Validate room 
    if (!formData.roomId) {
        errors.roomId = "RoomId is required.";
    }
    //Validate amenityId
     if (!formData.amenityId) {
        errors.amenityId = "AmenityId is required.";
    }

    return errors;
}