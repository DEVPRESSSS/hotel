import DataTable from "react-data-table-component";
import { CreateButton } from "../../../components/Buttons/CreateButton";
import { TableWrapperPage } from "../../../components/Table/TableWrapper";
import { ActionButtonComponent } from "../../../components/Buttons/ActionButton";
import { useRedirect } from "../../../hooks/useCustomNavigate";
import { useRoomType } from "../../../hooks/useRoomType";

export function RoomTypePage(){
        const {roomTypes, removeRoomType} = useRoomType();
         //Call the redirect function
        const redirect = useRedirect();
    
        const roomTypeData = roomTypes.map(rt => ({
            id: rt.roomTypeId,
            roomTypeName: rt.roomTypeName,
            pricePerNight: rt.pricePerNight,
            createdAt: rt.createdAt ? new Date(rt.createdAt).toISOString().split("T")[0] : "",
            updatedAt: rt.updatedAt ? new Date(rt.updatedAt).toISOString().split("T")[0] : "",
            
        }));
    
        const columns = [
        {
            name: "Type",
            selector: row => row.roomTypeName,
            sortable: true,
        },
        {
            name: "PricePerNight",
            selector: row => row.pricePerNight,
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
            cell: row => <ActionButtonComponent 
                    onEdit={()=> redirect(`/upsert/roomtype/${row.id}`)}
                    onDelete={
                        ()=> removeRoomType(`${row.id}`)
                    }/>,
            button: true,
            width: '100px',
        }
        ];
    
       
        return (
            <TableWrapperPage 
                title= "Room type management"
                headerAction={<CreateButton 
                            name = "Room" 
                            onClick={() => redirect("/upsert/roomtype", 
                                {
                                    entityName: "roomtype",
                                }) 
                            }/>}
                >
                <DataTable
                    columns={columns}
                    data={roomTypeData}/>         
            </TableWrapperPage>      
        )
}