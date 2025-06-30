"use server";
import { createUser, getUserByEmail } from "@/queries/queries";
import { redirect } from "next/navigation";

export const doUserRegister = async (userData) => {
  const user = Object.fromEntries(userData);
  const response = await createUser(user);
  if (!response) {
    throw new Error("User creation failed");
  } else {
    redirect("/");
  }
};

export const doUserLogin = async (userData) => {
  try {
    const credentials = {};
    credentials.email = userData.get("email");
    credentials.password = userData.get("password");

    const foundUser = await getUserByEmail(credentials.email);
    if (!foundUser) {
      throw new Error("User not found");
    }
    return foundUser;
  } catch (error) {
    throw error;
  }
};
