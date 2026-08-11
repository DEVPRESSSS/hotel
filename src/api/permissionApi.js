import api from "./apiClient";

export async function getPermissions() {
    const { data } = await api.get("/permissions");
    return data;
}
export async function getPermissionById(id) {
    const {data} = await api.get(`permissions/${id}`);
    return  data;
}
export async function createPermission(data) {
    const response =  api.post("/permissions", data);
    return response;
}

export async function updatePermission(id, data) {
    const response =  api.put(`permissions/${id}`,data);
    return response;
}

export function deletePermission(id) {
    return api.delete(`permissions/${id}`);
}