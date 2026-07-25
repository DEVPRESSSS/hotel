export function CreateButton({ onClick, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group flex items-center gap-1.5 text-sm font-medium
                 border border-teal-800 text-teal-800 px-4 py-1.5 rounded-lg
                 hover:bg-teal-800 hover:text-white
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-teal-800
                 transition-colors duration-150 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      <span>Create</span>
    </button>
  );
}