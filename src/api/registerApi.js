import api from "./apiClient";

export async function register(data) {
    const response = await api.post("/auth/register",data)
    return response.data;
}