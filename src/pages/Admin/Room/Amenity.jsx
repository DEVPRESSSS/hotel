import { DataTablePage } from "../../../components/Table/ReactDataTable";
import { ActionButtonComponent } from "../../../components/Buttons/ActionButton";
import { TableWrapperPage } from "../../../components/Table/TableWrapper";
import {CreateButton} from "../../../components/Buttons/CreateButton"
import { useRedirect } from "../../../hooks/useCustomNavigate";
import { useAmenity } from "../../../hooks/useAmenity";

export function AmenityPage(){
    const {amenities, removeAmenity} = useAmenity();
    
    const amenitiesData = amenities.map(p => ({
        amenityId: p.amenityId, 
        amenityName: p.name,
        createdAt: p.createdAt ? new Date(p.createdAt).toISOString().split("T")[0] : "",
        updatedAt: p.updatedAt ? new Date(p.updatedAt).toISOString().split("T")[0] : "",
   
    }));

    const columns = [
    {
        name: "AmenityId",
        selector: row => row.amenityId,
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
                    onEdit={() => redirect(`/upsert/amenity/${row.amenityId}`)}
                    onDelete={() => removeAmenity(row.amenityId)}
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
                title= "Amenity management"
                headerAction={<CreateButton 
                            onClick ={
                            () =>redirect("/upsert/amenity",
                                 {
                                    entityName: "amenity"
                                 })}
                         
                           />}
                >
                <DataTablePage
                    name="amenity"
                    columns={columns}
                    data={amenitiesData}
                />
            
            </TableWrapperPage>
        </>
    )
}