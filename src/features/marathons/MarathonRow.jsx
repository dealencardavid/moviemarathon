import { useNavigate } from "react-router-dom";
import { useDeleteMarathon } from "./useDeleteMarathon";

function MarathonRow({ marathon: { id, name, movies, curation_score } }) {
  const navigate = useNavigate();
  const { isDeleting, deleteMarathon } = useDeleteMarathon();

  return (
    <div
      className="py-4 grid grid-cols-4 items-center place-items-center text-center 
            text-stone-200 "
    >
      <button
        className="transition-all duration-200 hover:underline"
        onClick={() => navigate(`/marathons/${id}`)}
      >
        {name}
      </button>
      <p>{movies?.length}</p>
      <p>{curation_score || "--"}</p>
      <button onClick={() => deleteMarathon(id)} disabled={isDeleting}>
        Delete
      </button>
    </div>
  );
}

export default MarathonRow;
