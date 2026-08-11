// hooks/useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout} from "../api/authApi";
import { toast } from "react-toastify";
//import { login } from "../services/authService";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await login({    
        email,
        password
      });

      //Decide base on the role
      if(response.roleName === "Admin"){
          navigate("/dashboard");
      }else if(response.roleName === "Customer"){
          navigate("/product");
      }
    } catch (err) {
        toast.error(`${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return { handleSubmit, loading, error };
}

export function useLogOut(){
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();

    logout();
    toast.success("Log out success fully!");
    navigate("/login");
  
  }
    
  return {handleLogout}
}