function Table({ children }) {
  return (
    <div className="rounded-lg shadow-lg border-[0.5px] border-stone-600 h-full overflow-y-auto ">
      {children}
    </div>
  );
}

export default Table;
