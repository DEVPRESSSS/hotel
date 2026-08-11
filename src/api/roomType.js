import api from "./apiClient";

export async function getRoomTypes() {
    const {data} = await api.get("room-types");
    console.log(data);
    return data;
}

export async function getRoomTypeId(id) {
    const{data} = await api.get(`room-types/${id}`);
    return data;
}

export function createRoomType(data) {
    const response =  api.post("/room-types", data);
    return response;
}

export async function updateRoomType(id, data) {
    return await api.put(`room-types/${id}`,data);
    
}

export async function deleteRoomType(id) {
    return api.delete(`room-types/${id}`);
       
}