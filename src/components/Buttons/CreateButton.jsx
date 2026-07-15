export function CreateButton({ name, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="text-sm border-2 border-teal-700 text-teal-700 px-4 py-1.5 rounded-lg cursor-pointer
                       hover:bg-teal-700 hover:text-white transition-colors duration-150"
        >
            + Create {name}
        </button>
    );
}