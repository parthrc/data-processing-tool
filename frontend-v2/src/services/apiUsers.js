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
