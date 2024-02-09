import supabase from "./supabase.js";

import { mainConvertor } from "../utils/helpers.js";
import toast from "react-hot-toast";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

// *Get all files in the DB
export async function getAllFiles() {
  const { data: files, error } = await supabase.from("filesv2").select("*");

  if (error) {
    console.error(error);
    throw new Error("Files could not be loaded");
  }

  return { files, error };
}

// *Get all users info
export async function getAllUsers() {
  let { data: users, error } = await supabase.from("usersv2").select("*");

  if (error) {
    console.error(error);
    throw new Error("Files could not be loaded");
  }

  return { users, error };
}

// *Get files of a particular User

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

// *Upload files to storage

export async function uploadFile(file, current_user_id) {
  //!Create unique file name

  const fileName = `${Math.random()}-${file?.name}`.replaceAll("/", "");

  // !Main convertor

  const jsonData = await mainConvertor(file);

  //!Upload file to the storage bucket and get abck the url from returned data
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
    file_data: jsonData,
    file_data_text: jsonData,
    file_format: file?.type,
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

  return { fileRecord };
}

//*Get current working file

export async function getCurrentFile() {
  const { data: currentFile, error: currentFileError } = await supabase
    .from("currentFile")
    .select("*");

  if (currentFileError) {
    toast.error("Problem getting current file");
  }
  return currentFile[0].file_id;
}

//* Get files by file_id

export async function getFileById() {
  const file_id = await getCurrentFile();
  const { data: file, error } = await supabase
    .from("filesv2")
    .select("*")
    .eq("id", file_id);

  if (file.length === 0) {
    console.log("File not found");
    return null;
  }

  const file_data_text = file[0].file_data_text;

  return { file, file_data_text };
}

//* Update current file

export async function updateCurrentFile(new_file_id) {
  const { data: updatedCurrentFileId, error } = await supabase
    .from("currentFile")
    .update({ file_id: new_file_id })
    .eq("id", 1)
    .select();

  return updatedCurrentFileId;
}
