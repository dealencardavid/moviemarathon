import supabase from "./supabase";

export async function getMarathons() {
  const { data, error } = await supabase.from("marathons").select("*");

  if (error) {
    console.error(error);
    throw new Error("Marathons could not be loaded");
  }

  return data;
}

export async function getMarathon(id) {
  const { data, error } = await supabase
    .from("marathons")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Marathon not found");
  }

  return data;
}

export async function createMarathon(marathon) {
  const {
    data: {
      session: {
        user: { id },
      },
    },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase.from("marathons").insert({
    name: marathon.name,
    theme: marathon.theme,
    curation_score: 0,
    movies: marathon.movies,
    user_id: id,
    active: true,
  });

  if (error) {
    console.error(error);
    throw new Error("Marathon could not be created");
  }

  return data;
}

export async function setActiveMarathon(id) {
  await supabase
    .from("marathons")
    .update({
      active: false,
    })
    .neq("id", id);

  const { data, error } = await supabase
    .from("marathons")
    .update({ active: true })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Marathon could not be updated");
  }
  return data;
}

export async function updateMarathonMovies(id, updatedMovies) {
  const completedMarathon = updatedMovies.every(
    (movie) => movie.score1 !== 0 && movie.score2 !== 0
  );

  const totalMovies = updatedMovies.length;
  const totalScore1 = updatedMovies.reduce(
    (sum, movie) => sum + movie.score1,
    0
  );
  const totalScore2 = updatedMovies.reduce(
    (sum, movie) => sum + movie.score2,
    0
  );

  const avgScore1 = totalScore1 / totalMovies;
  const avgScore2 = totalScore2 / totalMovies;

  const avgCurationScore = ((avgScore1 + avgScore2) / 2).toFixed(1);

  const curationScore = completedMarathon ? avgCurationScore : 0;

  const { data, error } = await supabase
    .from("marathons")
    .update({
      movies: updatedMovies,
      curation_score: curationScore,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Marathon could not be updated");
  }
  return data;
}

export async function deleteMarathon(id) {
  const { data, error } = await supabase
    .from("marathons")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Marathon could not be deleted");
  }

  return data;
}
