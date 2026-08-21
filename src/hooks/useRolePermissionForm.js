import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGoBack } from "./usePrevPage";
import { useForm } from "./useForm";
import { useRole } from "./useRole";
import { usePermission } from "./usePermission";
import { valdiateRolePermission } from "../validations/rolePermission";
import { createRolePermission, getRolePermissionById, updateRolePermission } from "../api/rolePermissionApi";

export function useRolePermissionForm(){

    const navigate = useNavigate();
    const cancel = useGoBack();

    const { id } = useParams();

    const { roles } = useRole();
    const rolesValue = useMemo(
        () => roles.map(rt => ({ id: rt.roleId, name: rt.roleName })),
        [roles]
    );

    const {permissions} = usePermission();
    const permissionValue = useMemo(
        () => permissions.map(rt => ({ id: rt.permissionId, name: rt.name })),
        [permissions]
    );

    const {
        formData,
        setFormData,
        handleChange,
        errors,
        validateForm,
    } = useForm(
        {
            roleId: "",
            permissionId: "",
        },
        valdiateRolePermission
    );

    useEffect(() => {
        if (!id) return;

        const fetchRolePermission = async () => {
            try {
                const a = await getRolePermissionById(id);

                setFormData({
                    roleId: a.roleId,
                    permissionId: a.permissionId,
                   
                });
            } catch (error) {
                toast.error(error.message);
            }
        };

        fetchRolePermission();
    }, [id, setFormData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;

            if(!validateForm()){
                return;
            }

            if (id) {
                response = await updateRolePermission(id, formData);
            } else {
                response = await createRolePermission(formData);
            }

            toast.success(response.data.message);
            navigate("/rolepermission");

        } catch (error) {
            toast.error(error.message);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        cancel,
        permissionValue,
        rolesValue,
        errors
    };
        
}