import api from "./apiClient";
export async function getAmenities() {
    const { data } = await api.get("/amenity");
    return data;
}
export async function getAmenityById(id) {
    const {data} = await api.get(`amenity/${id}`);
    return  data;
}
export async function createAmenity(data) {
    const response =  api.post("/amenity", data);
    return response;
}

export async function updateAmenity(id, data) {
    const response =  api.put(`amenity/${id}`,data);
    return response;
}

export function deleteAmenity(id) {
    return api.delete(`amenity/${id}`);
}