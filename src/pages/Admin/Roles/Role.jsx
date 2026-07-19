import { ActionButtonComponent } from "../../../components/Buttons/ActionButton";
import { CreateButton } from "../../../components/Buttons/CreateButton";
import { DataTablePage } from "../../../components/Table/ReactDataTable";
import { TableWrapperPage } from "../../../components/Table/TableWrapper";
import { useRedirect } from "../../../hooks/useCustomNavigate";
import { useRole } from "../../../hooks/useRole";

export function RolePage(){
    const {roles, removeRole} = useRole();
    const redirect = useRedirect();
    
        const roleData = roles.map(role => ({
            id: role.roleId,
            roleName: role.roleName,
            createdAt: role.createdAt ? new Date(role.createdAt).toISOString().split("T")[0] : "",
            updatedAt: role.updatedAt ? new Date(role.updatedAt).toISOString().split("T")[0] : "",
            
        }));
    
        const columns = [
        {
            name: "Role Name",
            selector: row => row.roleName,
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
                    onEdit={()=> redirect(`/upsert/role/${row.id}`)}
                    onDelete={
                        ()=> removeRole(`${row.id}`)
                    }/>,
            button: true,
            width: '100px',
        }
        ];
    
       
        return (
            <TableWrapperPage 
                title= "Role management"
                headerAction={<CreateButton 
                            name = "Role" 
                            onClick={() => redirect("/upsert/role", 
                                {
                                    entityName: "role",
                                }) 
                            }/>}
                >
                <DataTablePage
                    columns={columns}
                    data={roleData}/>         
            </TableWrapperPage>      
        )

}