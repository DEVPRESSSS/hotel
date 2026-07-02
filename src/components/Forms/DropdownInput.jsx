export function DropdownInput({ optionValue = [] , name }) {
    return (
        <select className="h-8 w-full rounded-lg border-2 border-gray-300">
            <option value="">-- Select {name} --</option>

            {optionValue.map((item) => (
                <option
                    key={item.roomTypeId}
                    value={item.roomTypeId}
                >
                    {item.roomTypeName}
                </option>
            ))}
        </select>
    );
}