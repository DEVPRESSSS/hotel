import api from "./apiClient";
const URL = import.meta.env.VITE_API_URL;

export async function login({ email, password }) {
  const response = await api.post("auth/login",
    { email, password },
    { withCredentials: true });

  return response.data;
}

export async function getCurrentUser() {
  const response = await api.get("auth/me", { withCredentials: true });
  return response.data; 
}


export async function logout() {
  await api.post(`${URL}auth/logout`,{
    
    },{
      withCredentials:true
    }
  );
}
