import supabase from "./supabase.js";

export async function getAllFiles() {
  const { data: files, error } = await supabase.from("files").select("*");

  if (error) {
    console.error(error);
    throw new Error("Files could not be loaded");
  }

  return { files, error };
}
