function TableBody({ children }) {
  return (
    <div className="w-full bg-stone-800 divide-y-2 divide-stone-900 divide-solid flex flex-col">
      {children}
    </div>
  );
}

export default TableBody;
