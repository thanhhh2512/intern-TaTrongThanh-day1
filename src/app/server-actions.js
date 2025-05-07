// src/app/server-actions.js
"use server";

import { signIn, signOut } from "@logto/next/server-actions";
import { logtoConfig } from "../logto";

export const signInAction = async () => {
  await signIn(logtoConfig);
};

export const signOutAction = async () => {
  await signOut(logtoConfig);
};
