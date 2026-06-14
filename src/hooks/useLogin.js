// hooks/useLogin.js
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 // const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login(email, password);
      alert(`Welcome User!!!!`);
    } catch (err) {
      alert(`${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return { handleSubmit, loading, error };
}