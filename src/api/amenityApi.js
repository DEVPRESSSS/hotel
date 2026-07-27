
import { apiFetch } from "./apiClient";

export function getAmenities() {
    return apiFetch("amenity");
}

export function getAmenityById(id) {
    return apiFetch(`amenity/${id}`);
}

export function createAmenity(data) {
    return apiFetch("amenity", {
        method: "POST",
        body: data,
    });
}

export function updateAmenity(id, data) {
    return apiFetch(`amenity/${id}`, {
        method: "PUT",
        body: data,
    });
}

export function deleteAmenity(id) {
    return apiFetch(`amenity/${id}`, {
        method: "DELETE",
    });
}