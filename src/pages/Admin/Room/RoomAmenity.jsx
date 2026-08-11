import { DataTablePage } from "../../../components/Table/ReactDataTable";
import { ActionButtonComponent } from "../../../components/Buttons/ActionButton";
import { TableWrapperPage } from "../../../components/Table/TableWrapper";
import {CreateButton} from "../../../components/Buttons/CreateButton"
import { useRedirect } from "../../../hooks/useCustomNavigate";
import { useRoomAmenity } from "../../../hooks/useRoomAmenity";

export function RoomAmenityPage(){
    const {roomAmenities, removeRoomAmenity} = useRoomAmenity();
    
    const roleAmenitiesData = roomAmenities.map(p => ({
        roomAmenityId: p.roomAmenityId,
        roomNumber: p.roomNumber,
        amenityName: p.amenityName,
        createdAt: p.createdAt ? new Date(p.createdAt).toISOString().split("T")[0] : "",
        updatedAt: p.updatedAt ? new Date(p.updatedAt).toISOString().split("T")[0] : "",
   
    }));

    const columns = [
    {
        name: "RoomAmenityId",
        selector: row => row.roomAmenityId,
        sortable: true,
    },
    {
        name: "Room No.",
        selector: row => row.roomNumber,
        sortable: true,
    },
    {
        name: "Amenity Name",
        selector: row => row.amenityName,
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
        name: 'Action',
        cell: row =>
            row.roleName === "Admin" ? null : (
                <ActionButtonComponent
                    onEdit={() => redirect(`/upsert/roomamenity/${row.roomAmenityId}`)}
                    onDelete={() => removeRoomAmenity(row.roomAmenityId)}
                />
            ),
        button: true,
        width: '100px',
        }
    ];

    //Navigation 
   const redirect = useRedirect();
    return (
        <>
            <TableWrapperPage 
                title= "Room amenity management"
                headerAction={<CreateButton 
                            onClick ={
                            () =>redirect("/upsert/roomamenity",
                                 {
                                    entityName: "roomamenity"
                                 })}
                         
                           />}
                >
                <DataTablePage
                    name="room amenity"
                    columns={columns}
                    data={roleAmenitiesData}
                />
            
            </TableWrapperPage>
        </>
    )
}