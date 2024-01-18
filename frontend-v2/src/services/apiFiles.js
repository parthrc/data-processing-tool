import supabase from "./supabase.js";

//Get all files in the DB
export async function getAllFiles() {
  const { data: files, error } = await supabase.from("files").select("*");

  if (error) {
    console.error(error);
    throw new Error("Files could not be loaded");
  }

  return { files, error };
}

//Get all users info
export async function getAllUsers() {
  let { data: users, error } = await supabase.from("users").select("*");

  if (error) {
    console.error(error);
    throw new Error("Files could not be loaded");
  }

  return { users, error };
}
