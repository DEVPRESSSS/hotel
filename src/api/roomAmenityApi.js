import api from "./apiClient";


export async function getRoomAmenities() {
    const { data } = await api.get("/roomamenity");
    return data;
}
export async function getRoomAmenityById(id) {
    const {data} = await api.get(`roomamenity/${id}`);
    return  data;
}

export async function createRoomAmenity(data) {
    const response =  api.post("/roomamenity", data);
    return response;
}

export async function updateRoomAmenity(id, data) {
    const response =  api.put(`roomamenity/${id}`,data);
    return response;
}

export function deleteRoomAmenity(id) {
    return api.delete(`roomamenity/${id}`);
}