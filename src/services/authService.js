// authService.js
export async function login(email, password) {
    const response = await fetch("https://localhost:7167/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error("Invalid email or password");
    }

    return await response.json();
}