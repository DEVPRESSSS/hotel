export function ActionButtonComponent({ onEdit, onDelete, buttonToHide}) {
    return (
        <div className="flex items-center justify-center gap-2 p-1">
            <button
                onClick={onEdit}
                hidden = { buttonToHide == "Edit" ? true : false}
                className="w-16 rounded-lg bg-teal-700 p-2
                 text-white cursor-pointer hover:bg-teal-800
                 "
            >
                Edit
            </button>

            <button
                onClick={onDelete}
                className="w-16 rounded-lg border-2 border-red-700 p-2 
                    cursor-pointer hover:bg-red-700 hover:text-white"
            >
                Delete
            </button>
        </div>
    );
}