import { useUpdateMarathonMovieScores } from "./useUpdateMrathonMovieScores";
import { useForm } from "react-hook-form";

function RatingForm({ movie, setFormOpen }) {
  const { register, handleSubmit, reset } = useForm();
  // Fetch update scores
  const { update: updateScore, isLoading: isUpdatingScore } =
    useUpdateMarathonMovieScores();

  function handleCancel() {
    reset(), setFormOpen(false);
  }

  function onSubmit({ themeRelevance, enjoyability }) {
    const updatedMovie = {
      ...movie,
      score1: Number(themeRelevance),
      score2: Number(enjoyability),
    };
    updateScore(updatedMovie);
    reset();
    setFormOpen(false);
  }

  return (
    <div className="grid place-items-center px-4 py-2">
      <form
        className="bg-stone-900 rounded-md p-2 w-full grid grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="flex flex-col gap-2">
          <span className="text-stone-200 text-center">Theme Relevance</span>
          <input
            id="themeRelevance"
            type="number"
            min={1}
            max={10}
            step={0.1}
            className="bg-transparent border-b-2 border-main-500 py-3 text-center placeholder-stone-400 text-sm text-stone-50"
            placeholder="e.g. 8.4"
            {...register("themeRelevance", {
              required: "This field is required",
            })}
          />
          <span className="text-stone-400 text-sm text-center">
            How well does this movie fits with your marathon?
          </span>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-stone-200 text-center">Enjoyability</span>
          <input
            id="enjoyability"
            type="number"
            min={1}
            max={10}
            step={0.1}
            className="bg-transparent border-b-2 border-main-500 py-3 text-center placeholder-stone-400 text-sm text-stone-50"
            placeholder="e.g. 8.4"
            {...register("enjoyability", {
              required: "This field is required",
            })}
          />
          <span className="text-stone-400 text-sm text-center">
            Was it fun in the context of your marathon?
          </span>
        </label>
        <div className="col-span-2 flex gap-3 items-center justify-center">
          <button
            className="text-stone-50 text-sm font-semibold px-3 py-1 bg-stone-600 rounded-lg"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="text-stone-50 text-sm font-semibold px-3 py-1 bg-main-500 rounded-lg"
            disabled={isUpdatingScore}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default RatingForm;
