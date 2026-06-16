import { useRooms } from "../../hooks/useRooms.js";

export function RoomTableRows () {
    const { rooms, loading, error } = useRooms();

    if (loading) return <tr><td colSpan="6">Loading...</td></tr>;
    if (error) return <tr><td colSpan="6">Error: {error}</td></tr>;
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

