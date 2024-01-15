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
  });

  if (error) {
    console.error(error);
    throw new Error("Marathon could not be created");
  }

  return data;
}

export async function updateMarathonMovies(id, updatedMovies) {
  const { data, error } = await supabase
    .from("marathons")
    .update({
      movies: updatedMovies,
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
