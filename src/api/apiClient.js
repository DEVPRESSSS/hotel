import axios from "axios";

const URL = import.meta.env.VITE_API_URL;


export async function apiFetch(endpoint, options = {}) {

  const { body, headers, ...rest } = options;

  const response = await fetch(`${URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`${data.message}`);
  }
  return data;
}

//Implementent interceptor for logout and token rotation
const api = axios.create({
  baseURL: URL,
  withCredentials:true,
})

// instance.interceptors.request.use((config) =>{

//   return config;
// });

api.interceptors.response.use(
    (response) => response,
    async(error) =>{

      const originalRequest = error.config;
      if(error.response?.status == 401 
          && !originalRequest._retry){

            originalRequest._retry = true;
            try {
               await axios.post(`${URL}auth/refresh-token`,
                {},
                {
                  withCredentials:true
                }
               );

               return api(originalRequest);

            } catch {
               window.location.href = "/login";
            }


      }
      return Promise.reject(error);


    }
);

export default api;