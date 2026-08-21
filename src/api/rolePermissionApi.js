
import api from "./apiClient";

export async function getRolePermissions() {
    const { data } = await api.get("/role-permissions");
    return data;
}

export async function getRolePermissionById(id) {
    const {data} = await api.get(`role-permissions/${id}`);
    return  data;
}

export function createRolePermission(data) {

    const response =  api.post("/role-permissions", data);
    return response;
}

export function updateRolePermission(id, data) {
    const response =  api.put(`role-permissions/${id}`,data);
    return response;
}

export function deleteRolePermission(id) {
      return api.delete(`role-permissions/${id}`);

}

