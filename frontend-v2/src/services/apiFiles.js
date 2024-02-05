import supabase from "./supabase.js";

//Get all files in the DB
export async function getAllFiles() {
  const { data: files, error } = await supabase.from("filesv2").select("*");

  if (error) {
    console.error(error);
    throw new Error("Files could not be loaded");
  }

  return { files, error };
}

//Get all users info
export async function getAllUsers() {
  let { data: users, error } = await supabase.from("usersv2").select("*");

  if (error) {
    console.error(error);
    throw new Error("Files could not be loaded");
  }

  return { users, error };
}

//Get files of a particular User

export async function getFilesWithUserId(user_id) {
  const { data: files, error } = await supabase
    .from("filesv2")
    .select("*", user_id);

  if (error) {
    console.error(error);
    throw new Error("Files could not be loaded for user id:", user_id);
  }

  return { files, error };
}
