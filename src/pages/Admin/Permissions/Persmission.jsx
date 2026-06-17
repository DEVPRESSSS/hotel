import {DataTablePage} from "../../components/Table/ReactDataTable.jsx"
import { useRooms } from "../../hooks/useRooms.js";
import { ActionButtonComponent } from "../../components/Buttons/ActionButton.jsx";

export function PermissionPage(){
    const {rooms} = useRooms();
    
    const roomData = rooms.map(room => ({
        id: room.roomId,
        roomNo: room.roomNumber,
        capacity: room.capacity,
        roomTypeName: room.roomName,
        floorName: room.floorName,
        createdAt: room.createdAt ? new Date(room.createdAt).toISOString().split("T")[0] : "",
        updatedAt: room.updatedAt ? new Date(room.updatedAt).toISOString().split("T")[0] : "",
        action:< ActionButtonComponent/>,
        
    }));

    const columns = [
    {
        name: "Room No.",
        selector: row => row.roomNo,
        sortable: true,
    },
    {
        name: "Capacity",
        selector: row => row.capacity,
        sortable: true,
    },
    {
        name: "Type",
        selector: row => row.roomTypeName,
        sortable: true,
    },
    {
        name: "Floor",
        selector: row => row.floorName,
        sortable: true,
    },
    {
        name: "Created",
        selector: row => row.createdAt,
        sortable: true,
    },
      {
        name: "Updated",
        selector: row => row.updatedAt,
        sortable: true,
    },
    {
        name: "Action",
        selector: row => row.action,
        sortable: false,
    },
    ];
    return (
        <>
            <DataTablePage
                name="Room"
                columns={columns}
                data={roomData}
            />         
        </>
    )
}