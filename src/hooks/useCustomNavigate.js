import { useNavigate } from "react-router-dom";

export function useRedirect() {
    const navigate = useNavigate();
    
    return (path, state = {}) => {
        navigate(path, {state});
    };
}