import { useNavigate } from "react-router-dom";
import { useMarathonById } from "./useMarathonById";

function MovieIncludedIn({ marathon }) {
  const { marathon: appearsInMarathon, isLoading } = useMarathonById(marathon);
  const navigate = useNavigate();

  if (isLoading) return <p>is Loading</p>;

  function handleNavigate() {
    navigate(`/marathons/${marathon}`);
  }

  return (
    <li>
      <a
        onClick={handleNavigate}
        className=" cursor-pointer transition-all duration-200 hover:text-main-500"
      >
        {appearsInMarathon.name}
      </a>
    </li>
  );
}

export default MovieIncludedIn;
