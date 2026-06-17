//roomApi.js
export async function fetchPermissions() {
    const response = await fetch('https://localhost:7167/api/v1/permissions', {
        method: 'GET',
        credentials:"include",
        headers: {"Content-Type":"application/json"}
    });
    if(!response.ok)throw new Error("Failed to fetch permissions");
    return response.json();
}