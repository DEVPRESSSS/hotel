import { DataTablePage } from "../../components/Table/ReactDataTable.jsx";
import { useRooms } from "../../hooks/useRooms.js";
import { ActionButtonComponent } from "../../components/Buttons/ActionButton.jsx";
import { TableWrapperPage } from "../../components/Table/TableWrapper.jsx";
import { CreateButton } from "../../components/Buttons/CreateButton.jsx";
import { useRedirect } from "../../hooks/useCustomNavigate.js";

export function RoomPage() {
  const { rooms, loading, removeRoom } = useRooms();
  const redirect = useRedirect();

  const roomData = (rooms ?? []).map(room => ({
    id: room.roomId,
    roomNo: room.roomNumber,
    capacity: room.capacity,
    roomTypeName: room.roomName,
    floorName: room.floorName,
    createdAt: room.createdAt ? new Date(room.createdAt).toISOString().split("T")[0] : "",
    updatedAt: room.updatedAt ? new Date(room.updatedAt).toISOString().split("T")[0] : "",
  }));

  const columns = [
    { name: "Room No.", selector: row => row.roomNo, sortable: true },
    { name: "Capacity", selector: row => row.capacity, sortable: true },
    { name: "Type", selector: row => row.roomTypeName, sortable: true },
    { name: "Floor", selector: row => row.floorName, sortable: true },
    { name: "Created", selector: row => row.createdAt, sortable: true },
    { name: "Updated", selector: row => row.updatedAt, sortable: true },
    {
      name: "Action",
      cell: row => (
        <ActionButtonComponent
          onEdit={() => redirect(`/upsert/room/${row.id}`)}
          onDelete={() => removeRoom(row)}
        />
      ),
      button: true,
      width: "100px",
    },
  ];

  return (
    <TableWrapperPage
      title="Room management"
      headerAction={
        <CreateButton
          name="Room"
          onClick={() => redirect("/upsert/room", { entityName: "room" })}
        />
      }
    >
      {loading ? (
        <div className="flex items-center justify-center py-16 text-sm text-gray-400">
          Loading rooms...
        </div>
      ) : roomData.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-sm text-gray-400">
          No rooms found.
        </div>
      ) : (
        <DataTablePage columns={columns} data={roomData} />
      )}
    </TableWrapperPage>
  );
}