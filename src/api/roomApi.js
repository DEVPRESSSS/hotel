//roomApi.js
export async function fetchRooms() {
    const response = await fetch('https://localhost:7167/api/v1/rooms', {
        method: 'GET',
        credentials:"include",
        headers: {"Content-Type":"application/json"}
    });
    if(!response.ok)throw new Error("Failed to fetch rooms");
    return response.json();
}