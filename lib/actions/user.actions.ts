"use server";

import { isRedirectError } from "next/dist/client/components/redirect";

import { signIn, signOut } from "@/auth";
import { signInFormSchema } from "../validations/user";

export async function signInWithCredentials(formData: FormData) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return {
      success: true,
      message: "Signed In Successfully",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      success: false,
      message: "Invalid email or password",
    };
  }
}

export async function signOutUser() {
  await signOut();
}
