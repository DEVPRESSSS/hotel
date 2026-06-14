import { useState, useEffect } from 'react';

const GetRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://localhost:7167/api/v1/rooms", {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((data) => setRooms(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <tr><td colSpan="6">Loading...</td></tr>;
    if (error)   return <tr><td colSpan="6">Error: {error}</td></tr>;
    if (!rooms.length) return <tr><td colSpan="6">No rooms found.</td></tr>;

    return rooms.map((room) => (
        <tr key={room.roomId}>
            <td>{room.roomNumber}</td>
            <td>{room.capacity}</td>
            <td>{room.roomName}</td>
            <td>{room.floorName}</td>
            <td>{room.createdAt ? new Date(room.createdAt).toLocaleDateString() : "—"}</td>
            <td>{room.updatedAt ? new Date(room.updatedAt).toLocaleDateString() : "—"}</td>
        </tr>
    ));
};

export default GetRooms