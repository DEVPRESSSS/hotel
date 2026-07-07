export function TextInput({name,value, onChange, placeholder }) {
    return (
        <input
            name={name}
            value={value}
            onChange={onChange}
            type="text"
            placeholder={placeholder}
            className="w-full h-10 px-3 rounded-lg border-2 border-gray-300 text-gray-800 placeholder-gray-400
                       transition-colors duration-150
                       focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                       hover:border-gray-400"
        />
    )
}
