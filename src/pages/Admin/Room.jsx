import { Table } from "../../components/Table/Table";
import GetRooms from "../../api/RoomApi";

export function RoomPage(){

    const tableHeader = [
        {title: "Room No." , id : 1},
        {title: "Capacity" , id : 2},
        {title: "Type" , id : 3},
        {title: "Floor" , id : 4},
        {title: "CreatedAt" , id : 5},
        {title: "UpdatedAt" , id : 6},

    ];

    return (

        <>
         <Table name = "Room" tableHeader = {tableHeader}>
            <GetRooms/>
         </Table>
        </>
    )
}