export function DropdownInput({ optionValue = [], name }) {
    return (
        <select
            className="w-full h-10 px-3 rounded-lg border-2 border-gray-300 text-gray-800 bg-white
                       transition-colors duration-150 cursor-pointer
                       focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                       hover:border-gray-400"
        >
            <option value="">-- Select {name} --</option>

            {optionValue.map((item) => (
                <option key={item.roomTypeId} value={item.roomTypeId}>
                    {item.roomTypeName}
                </option>
            ))}
        </select>
    );
}