import { useNavigate } from "react-router-dom";
import { useDeleteMarathon } from "./useDeleteMarathon";
import { HiOutlineTrash } from "react-icons/hi2";
import { useEffect } from "react";

function MarathonRow({
  checked,
  setChecked,
  marathon: { id, name, movies, curation_score, active },
}) {
  const navigate = useNavigate();
  const { isDeleting, deleteMarathon } = useDeleteMarathon();

  function handleCheckbox() {
    setChecked(id);
  }

  useEffect(
    function () {
      if (active) setChecked(id);
    },
    [setChecked, active, id]
  );

  return (
    <div
      className="py-4 grid grid-cols-[100px_1fr_1fr_1fr_100px] items-center place-items-center text-center 
            text-stone-200 "
    >
      <label>
        <input
          type="checkbox"
          className=" appearance-none bg-stone-50 text-main-500 h-3 w-3 rounded-sm cursor-pointer checked:bg-main-500"
          checked={checked === id}
          onChange={handleCheckbox}
        />
      </label>
      <a
        className="cursor-pointer transition-all duration-200 hover:text-main-500"
        onClick={() => navigate(`/marathons/${id}`)}
      >
        {name}
      </a>
      <p>{movies?.length}</p>
      <p>{curation_score || "--"}</p>
      <button
        className="text-lg text-stone-200 transition-all duration-200 hover:text-main-500 active:scale-95"
        onClick={() => deleteMarathon(id)}
        disabled={isDeleting}
      >
        <HiOutlineTrash />
      </button>
    </div>
  );
}

export default MarathonRow;
