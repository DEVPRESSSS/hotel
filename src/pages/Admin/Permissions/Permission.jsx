import { DataTablePage } from "../../../components/Table/ReactDataTable";
import { usePermission } from "../../../hooks/usePermission";
import { ActionButtonComponent } from "../../../components/Buttons/ActionButton";
import { TableWrapperPage } from "../../../components/Table/TableWrapper";
import {CreateButton} from "../../../components/Buttons/CreateButton"
import { useRedirect } from "../../../hooks/useCustomNavigate";

export function PermissionPage(){
    const {permissions, removePermission} = usePermission();
    
    const permissionData = permissions.map(p => ({
        permissionId: p.permissionId,
        name: p.name,
        createdAt: p.createdAt ? new Date(p.createdAt).toISOString().split("T")[0] : "",
        updatedAt: p.updatedAt ? new Date(p.updatedAt).toISOString().split("T")[0] : "",
   
    }));

    const columns = [
    {
        name: "PermissionId",
        selector: row => row.permissionId,
        sortable: true,
    },
    {
        name: "Name",
        selector: row => row.name,
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
                onEdit={()=> redirect(`/upsert/permission/${row.permissionId}`)}
                onDelete={
                    ()=> removePermission(`${row.permissionId}`)
                }/>,
        button: true,
        width: '100px',
    },
    ];

    //Navigation 
   const redirect = useRedirect();
    return (
        <>
            <TableWrapperPage 
                title= "Permission management"
                headerAction={<CreateButton 
                            onClick ={
                            () =>redirect("/upsert/permission",
                                 {
                                    entityName: "permission"
                                 })}
                         
                           />}
                >
                <DataTablePage
                    name="permission"
                    columns={columns}
                    data={permissionData}
                />
            
            </TableWrapperPage>
        </>
    )
}