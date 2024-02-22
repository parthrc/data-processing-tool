import { useMutation } from "@tanstack/react-query";
import supabase from "./supabase.js";

//!Registring a new user

export async function registerUser(newUser) {
  //Adding user to AUTH with additional user info as metadata
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: newUser.email,
    password: newUser.pass1,
  });
  console.log("AUTH Data returned:", authData);

  if (authError) {
    console.error(authError);
    throw new Error("User could not be registered in SUPABASE AUTH");
  }

  const nUser = {
    id: authData?.user?.id,
    username: newUser.username,
    email: newUser.email,
    password: newUser.pass1,
    question: newUser.security_question,
    answer: newUser.security_answer,
  };

  //Adding user to our table
  const { data, error } = await supabase
    .from("usersv2")
    .insert([{ ...nUser }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("User could not be registered");
  }
  return { authData: authData, data: data };
}

//!User login

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

//!Get current user

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data: currentUser, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return currentUser?.user;
}

// !Logout user

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error("Error while signing out");
}

// !Get all users list

export async function getAllUsers() {
  const { data: users, error } = await supabase.from("usersv2").select("*");

  if (error) throw new Error("Errorgetting all users list.");

  return users;
}
