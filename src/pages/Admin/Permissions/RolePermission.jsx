import { DataTablePage } from "../../../components/Table/ReactDataTable";
import { ActionButtonComponent } from "../../../components/Buttons/ActionButton";
import { TableWrapperPage } from "../../../components/Table/TableWrapper";
import {CreateButton} from "../../../components/Buttons/CreateButton"
import { useRedirect } from "../../../hooks/useCustomNavigate";
import { useRolePermission } from "../../../hooks/useRolePermission";

export function RolePermissionPage(){
    const {rolePermissions, removeRolePermission} = useRolePermission();
    
    const rolePermissionData = rolePermissions.map(p => ({
        rpId: p.rpId,
        roleName: p.roleName,
        permissionName: p.permissionName,
        createdAt: p.createdAt ? new Date(p.createdAt).toISOString().split("T")[0] : "",
        updatedAt: p.updatedAt ? new Date(p.updatedAt).toISOString().split("T")[0] : "",
   
    }));

    const columns = [
    {
        name: "RolePermissionId",
        selector: row => row.rpId,
        sortable: true,
    },
    {
        name: "RoleName",
        selector: row => row.roleName,
        sortable: true,
    },
    {
        name: "Permission",
        selector: row => row.permissionName,
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
                    onEdit={() => redirect(`/upsert/rolepermission/${row.rpId}`)}
                    onDelete={() => removeRolePermission(row.rpId)}
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
                title= "Role permission management"
                headerAction={<CreateButton 
                            onClick ={
                            () =>redirect("/upsert/rolepermission",
                                 {
                                    entityName: "rolepermission"
                                 })}
                         
                           />}
                >
                <DataTablePage
                    name="role permission"
                    columns={columns}
                    data={rolePermissionData}
                />
            
            </TableWrapperPage>
        </>
    )
}