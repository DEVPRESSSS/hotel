import api from "./apiClient";

export async function fetchUser() {
   const {data} = await api.get('users');
   return data;
}