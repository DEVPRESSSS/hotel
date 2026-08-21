// hooks/useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../api/authApi";
import { toast } from "react-toastify";
import { useAuth } from "../context/useAuth"; //

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useAuth(); 

  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await login({ email, password });

      setUser(response); 

      if (response.roleName === "Admin") {
        navigate("/dashboard");
      } else if (response.roleName === "Customer") {
        navigate("/guestdashboard");
      }
    } catch (err) {
      toast.error(`${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return { handleSubmit, loading, error };
}

export function useLogOut() {

  const navigate = useNavigate();
  const { setUser } = useAuth();

  async function handleLogout(e) {
    e.preventDefault();

    await logout();
    setUser(null); 

    toast.success("Log out successfully!");
    navigate("/login");
  }

  return { handleLogout };
}