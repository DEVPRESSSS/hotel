import {DataTablePage} from "../../components/Table/ReactDataTable.jsx"
// import { useRooms } from "../../hooks/useRooms.js";

// export function RoomPage(){

//     const tableHeader = [
//         {title: "Room No." , id : 1},
//         {title: "Capacity" , id : 2},
//         {title: "Type" , id : 3},
//         {title: "Floor" , id : 4},
//         {title: "CreatedAt" , id : 5},
//         {title: "UpdatedAt" , id : 6},

//     ];

//     return (

//         <>
//          <Table name = "Room" tableHeader = {tableHeader}>
//             <RoomTableRows/>
//          </Table>
//         </>
//     )
// }

export function RoomPage(){
    
    const data = [
        { id: 1, firstName: 'Aria',   lastName: 'Chen',   department: 'Engineering', baseSalary: 140000},
        { id: 2, firstName: 'Marcus', lastName: 'Webb',   department: 'Product',     baseSalary: 125000},
        { id: 3, firstName: 'Priya',  lastName: 'Kapoor', department: 'Design',      baseSalary: 110000},
        { id: 4, firstName: 'Jordan', lastName: 'Ellis',  department: 'Analytics',   baseSalary: 135000},
    ];

    const columns = [
    {
        name: "First Name",
        selector: row => row.firstName,
        sortable: true,
    },
    {
        name: "Last Name",
        selector: row => row.lastName,
        sortable: true,
    },
    {
        name: "Department",
        selector: row => row.department,
        sortable: true,
    },
    {
        name: "Base Salary",
        selector: row => row.baseSalary,
        sortable: true,
        right: true,
    },
    ];
    return (
        <>
        <DataTablePage
            name="Room"
            columns={columns}
            data={data}
        />         
        </>
    )
}