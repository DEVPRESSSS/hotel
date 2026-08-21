export function valdiateRolePermission(formData) {

    const errors = {};
 
    if (!formData.roleId) {
        errors.roleId = "Role is required.";
    }
    
    if (!formData.permissionId) {
        errors.permissionId = "Permission is required.";
    }

    return errors;
}