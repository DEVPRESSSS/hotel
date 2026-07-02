import { DataTablePage } from "../../../components/Table/ReactDataTable";
import { ActionButtonComponent } from "../../../components/Buttons/ActionButton";
import { TableWrapperPage } from "../../../components/Table/TableWrapper";
import {CreateButton} from "../../../components/Buttons/CreateButton"
import { useRedirect } from "../../../hooks/useCustomNavigate";
import { useUser } from "../../../hooks/useUser";

export function UserPage(){
    const {users} = useUser();
    
    const userData = users.map(u => ({
        id: u.id,
        fullName: u.fullName,
        email: u.email,
        roleName: u.roleName,
        isActive: u.isActive ? (
            <p className="bg-green-700  text-white text-sm rounded-lg px-2 py-1 text-center">
                Active
            </p>
        ) : (
            <p className="bg-red-600 text-white rounded-lg text-sm px-2 py-1 text-center">
                Inactive
            </p>
        ),        
        createdAt: u.createdAt ? new Date(u.createdAt).toISOString().split("T")[0] : "",
    
        updatedAt: u.updatedAt ? new Date(u.updatedAt).toISOString().split("T")[0] : "",
        action:<ActionButtonComponent 
                onDelete={() => alert(`Are you sure you want to delete this one?${u.fullName}`)}/>        
    }));

    const columns = [
    // {
    //     name: "Id",
    //     selector: row => row.id,
    //     sortable: true,
        
    // },
    {
        name: "Name",
        selector: row => row.fullName,
        sortable: true,
    },
      {
        name: "Email",
        selector: row => row.email,
        sortable: true,
    },
    {
        name: "Role",
        selector: row => row.roleName,
        sortable: true,
    },
    {
        name: "Status",
        selector: row => row.isActive,
        sortable: false,
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

    //Navigation 
   const redirect = useRedirect();
    return (
        <>
            <TableWrapperPage 
                title= "User management"
                headerAction={<CreateButton onClick ={() =>redirect("/upsert", {entityName: "user"})}/>}
                >
                <DataTablePage
                    name="user"
                    columns={columns}
                    data={userData}
                />
            
            </TableWrapperPage>
        </>
    )
}