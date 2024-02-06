import toast from "react-hot-toast";
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

// Upload files to storage

export async function uploadFile(file, current_user_id) {
  //Create unique file name
  console.log(file);
  const fileName = `${Math.random()}-${file?.name}`.replaceAll("/", "");

  console.log("FileName", fileName);
  console.log("FileName+currentuser", current_user_id);

  //Upload file to the storage bucket and get abck the url from returned data
  const { error: storageError, data } = await supabase.storage
    .from("da_filestorage")
    .upload(fileName, file);

  if (storageError) {
    toast.error("Error uploading");
    return null;
  }

  //Creating the public URL of the uploaded file
  const { data: url, error: urlError } = supabase.storage
    .from("da_filestorage")
    .getPublicUrl(data.path);

  if (urlError) {
    toast.error("Error retrieving url");
    return null;
  }
  console.log(data);

  //Update record in the filesv2 table with current_user_id
  const nFileRecord = {
    user_id: current_user_id,
    file_name: data.path,
    file_link: url.publicUrl,
  };

  console.log("New file record", nFileRecord);

  const { data: fileRecord, error: fileRecordError } = await supabase
    .from("filesv2")
    .insert([nFileRecord])
    .select();

  if (fileRecordError) {
    toast.error("Error while creating new file record");
    return null;
  }
  console.log("File record", fileRecord);

  return { fileRecord };
}
