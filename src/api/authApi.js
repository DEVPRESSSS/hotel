import axios from "axios";
import { apiFetch } from "./apiClient";
const URL = import.meta.env.VITE_API_URL;

export async function login({ email, password }) {
  return await apiFetch("auth/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
}

export async function logout() {
  
  axios.post(`${URL}auth/logout`,{
  
  },{
    withCredentials:true
  }
);
}
