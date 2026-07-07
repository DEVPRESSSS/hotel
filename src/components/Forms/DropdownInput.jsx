export function DropdownInput({ name, optionValue = [], nameFor, value, onChange }) {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full h-10 px-3 rounded-lg border-2 border-gray-300 text-gray-800 bg-white
                       transition-colors duration-150 cursor-pointer
                       focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                       hover:border-gray-400"
        >
            <option value="">-- Select {nameFor} --</option>

            {optionValue.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.name}
                </option>
            ))}
        </select>
    );
}