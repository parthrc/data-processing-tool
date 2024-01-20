import { useMutation } from "@tanstack/react-query";
import supabase from "./supabase.js";

//Registring a new user

export async function registerUser(newUser) {
  const nUser = {
    username: newUser.username,
    email: newUser.email,
    password: newUser.pass1,
    question: newUser.security_question,
    answer: newUser.security_answer,
  };

  console.log(nUser);

  const { data, error } = await supabase
    .from("users")
    .insert([{ ...nUser }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("User could not be registered");
  }
  console.log("Data returned:", data);
  return data;
}

//User login

export async function loginUser({ email, password }) {
  const { data: user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    throw new Error("User could not be logged in");
  }

  return { user, error };
}

//Get current user

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data: currentUser, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return currentUser?.user;
}

//Logout user

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error("Error while signing out");
}
