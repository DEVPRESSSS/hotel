
import api from "./apiClient";
export async function getRoles() {
    const { data } = await api.get("/roles");
    return data;
}
export async function getRoleById(id) {
    const {data} = await api.get(`roles/${id}`);
    return  data;
}
export async function createRole(data) {
    const response =  api.post("/roles", data);
    return response;
}

export async function updateRole(id, data) {
    const response =  api.put(`roles/${id}`,data);
    return response;
}

export function deleteRole(id) {
    return api.delete(`roles/${id}`);
}