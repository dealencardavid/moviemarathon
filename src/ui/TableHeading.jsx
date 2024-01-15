function TableHeading({ columns, children }) {
  const gridColumns = `grid-cols-${columns}`;

  // FIX COLUMNS
  return (
    <div
      className={`w-full bg-stone-900 h-16 rounded-t-lg border-b-[0.5px] border-stone-600 grid ${gridColumns} items-center place-items-center`}
    >
      {children}
    </div>
  );
}

export default TableHeading;
