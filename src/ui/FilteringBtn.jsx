function FilteringBtn({ children }) {
  return (
    <button className="rounded-md p-2 text-sm font-medium text-stone-400 hover:bg-main-500 hover:text-white transition-all duration-200">
      {children}
    </button>
  );
}

export default FilteringBtn;
