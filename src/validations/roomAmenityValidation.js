// Define validation rules specific to the Room form
export function validateRoomAmenity(formData) {

    const errors = {};

    // Validate room 
    if (!formData.roomId) {
        errors.roomId = "Room is required.";
    }
    //Validate amenityId
     if (!formData.amenityId) {
        errors.amenityId = "Amenity is required.";
    }

    return errors;
}