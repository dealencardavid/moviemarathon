function FilterBtn({ children, active, disabled, handleClick }) {
  const isActiveStyle = active ? "bg-main-500 text-stone-50" : "text-stone-400";

  return (
    <button
      className={`${isActiveStyle} rounded-md p-2 text-xs sm:text-sm font-medium hover:bg-main-500 hover:text-stone-50 transition-all duration-200`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default FilterBtn;
